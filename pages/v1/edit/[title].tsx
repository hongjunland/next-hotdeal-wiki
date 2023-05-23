import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { Block, BlockNoteEditor } from "@blocknote/core";
import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { UpdateWikiInput, Wiki } from "@/types/Hotdeal/wiki";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { wikiAPI } from "@/api/wikiAPI";
import { QueryClient, dehydrate, useQuery } from "react-query";

interface Props {
  wiki: Wiki;
}
export default function EditPage({ wiki }: Props) {
  const router = useRouter();
  const { title: initTitle } = router.query;
  const queryClient = new QueryClient();
  const [title, setTitle] = useState(initTitle || "");
  const [blocks, setBlocks] = useState<Block[]>();

  const decodeContent = (encodedContent: string | undefined) => {
    if (!wiki || !encodedContent) return null;
    const decodedContent = JSON.parse(encodedContent?.replaceAll(`'`, `"`));
    return decodedContent as Block[];
  };

  const editor: BlockNoteEditor | null = useBlockNote({
    initialContent: decodeContent(wiki?.content) || [],
    onEditorContentChange: (editor: BlockNoteEditor) => {
      setBlocks(editor.topLevelBlocks);
    },
  });
  
  const handleUpdateClick = async () => {
    const content = JSON.stringify(blocks).replaceAll(`"`, `'`);
    const input = { title: title, content: content };
    await wikiAPI.updateWiki({
      ...input,
      id: parseInt(wiki.id),
    } as UpdateWikiInput);
    queryClient.invalidateQueries("wiki");
    router.push(`/wiki/${title}`);
  };

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
            name="title"
            type="text"
            defaultValue={wiki?.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button onClick={handleUpdateClick}>수정완료</Button>
        </Box>
        <div>
          <BlockNoteView editor={editor} />
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
  const wiki = await wikiAPI.fetchWikiByTitle(title);
  await queryClient.prefetchQuery("wiki", () => wiki);
  if (!wiki) {
    return {
      redirect: {
        destination: `/write/${context.params.title}`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      wiki: wiki,
    },
  };
}
