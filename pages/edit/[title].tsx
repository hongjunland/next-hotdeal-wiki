import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { CreateWikiInput, UpdateWikiInput, Wiki } from "@/types/Hotdeal/wiki";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import MarkdownIt from "markdown-it";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});
const mdParser = new MarkdownIt();

import "react-markdown-editor-lite/lib/index.css";
import { useRouter } from "next/router";
import { wikiAPI } from "@/api/wikiAPI";
import { QueryClient, dehydrate, useQuery } from "react-query";

export default function EditPage() {
  const router = useRouter();
  const queryClient = new QueryClient();
  const [ title, setTitle] = useState(router.query.title);
  const { data: wiki, status } = useQuery("wiki", () =>
    wikiAPI.fetchWikiByTitle(title as string)
  );
  const [content, setContent] = useState(wiki?.content || '');

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>error...</div>;
  }

  if (router.isFallback) {
    return (
      <>
        <div>Not found router!!!!</div>
      </>
    );
  }
  const handleCreateClick = async () => {
    const input = {title: title, content: content} as CreateWikiInput;
    console.log(title, content);
    await wikiAPI.createWiki(input);
    queryClient.invalidateQueries('wiki');
    router.push(`/wiki/${title}`);
  };

  if (!wiki) {
    return (
      <Template>
        <Article>
          <Box
            borderBottom={"1px solid gray"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography variant="h1">{title}</Typography>
            <Button onClick={handleCreateClick}>작성완료</Button>
          </Box>
          <div>
            <MdEditor
              value={content}
              onChange={handleEditorChange}
              renderHTML={(text) => mdParser.render(text)}
            />
            <div
              dangerouslySetInnerHTML={{ __html: mdParser.render(content) }}
            />
          </div>
        </Article>
      </Template>
    );
  }
  const handleUpdateClick = async () => {
    await wikiAPI.updateWiki({
      id: parseInt(wiki.id),
      title: title,
      content: content,
    } as UpdateWikiInput);
    queryClient.invalidateQueries('wiki');
    router.push(`/wiki/${title}`);
  };

  function handleEditorChange({ html, text }: { html: string; text: string }) {
    setContent(text);
  }

  return (
    <Template>
      <Article>
        <Box
          paddingBottom={"2rem"}
          borderBottom={"1px solid gray"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <input
            type="text"
            defaultValue={wiki.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button onClick={handleUpdateClick}>수정완료</Button>
        </Box>
        <div>
          <MdEditor
            defaultValue={wiki.content}
            onChange={handleEditorChange}
            renderHTML={(text) => mdParser.render(text)}
          />
          <div dangerouslySetInnerHTML={{ __html: mdParser.render(content) }} />
        </div>
      </Article>
    </Template>
  );
}

interface WikiTitle {
  title: string;
}
export async function getStaticPaths() {
  const wikis = await wikiAPI.fetchAllWikiTitle();
  return {
    paths: wikis.map((wiki: WikiTitle) => ({
      params: { title: wiki.title.toString() },
    })),
    fallback: true,
  };
}

interface GetStaticPropsContext {
  params: WikiTitle;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { title } = context.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("wiki", () =>
    wikiAPI.fetchWikiByTitle(title)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  };
}
