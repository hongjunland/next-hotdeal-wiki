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

interface EditPageProps {
  wiki: Wiki;
}

export default function EditPage({ wiki }: EditPageProps) {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const createWiki = async (input: CreateWikiInput) => {
    await wikiAPI.createWiki(input);
    router.push(`/wiki/${title}`);
  };

  const handleUpdateClick = async () => {
    await wikiAPI.updateWiki({
      id: parseInt(wiki.id),
      title: title,
      content: content,
    } as UpdateWikiInput);
    router.push(`/wiki/${title}`);
  };

  const handleCreateClick = async () => {
    await createWiki({
      title: wiki.title,
      content: content,
    } as CreateWikiInput);
    console.log(wiki.title);
    router.push(`/wiki/${wiki.title}`);
  };
  useEffect(() => {
    console.log(wiki);
  }, [wiki]);

  if (router.isFallback || !wiki) {
    return (
      <>
        <div>Not found router!!!!</div>
      </>
    );
  }

  if (wiki.id === "0") {
    return (
      <Template>
        <Article>
          <Box borderBottom={"1px solid gray"} display={"flex"} justifyContent={'space-between'}>
            <Typography variant="h1">{wiki.title}</Typography>
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
          justifyContent={'space-between'}
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
  const wiki = await wikiAPI.fetchWikiByTitle(title);

  if (!wiki) {
    return {
      props: {
        wiki: {
          id: "0",
          title: title,
          content: "",
        },
      },
    };
  }
  return {
    props: {
      wiki,
    },
    revalidate: 1,
  };
}
