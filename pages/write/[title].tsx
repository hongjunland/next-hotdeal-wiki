import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { Block, BlockNoteEditor } from "@blocknote/core";
import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { wikiAPI } from "@/api/wikiAPI";
import { QueryClient} from "react-query";
interface Props {
  title: string;
}
export default function WritePage({ title }: Props) {
  const router = useRouter();
  const queryClient = new QueryClient();
  const [blocks, setBlocks] = useState<Block[]>();

  const editor: BlockNoteEditor | null = useBlockNote({
    initialContent: blocks || [],
    onEditorContentChange: (editor: BlockNoteEditor) => {
      setBlocks(editor.topLevelBlocks);
    },
  });

  const handleCreateClick = async () => {
    const content = blocks ? JSON.stringify(blocks).replaceAll(`"`, `'`) : "";
    const input = { title: title, content: content };
    await wikiAPI.createWiki(input);
    queryClient.invalidateQueries("wiki");
    router.replace(`/wiki/${title}`);
  };

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
  await queryClient.prefetchQuery("wiki", () =>
    wikiAPI.fetchWikiByTitle(title)
  );

  if (wiki) {
    return {
      redirect: {
        destination: `/edit/${context.params.title}`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      title: title,
    },
  };
}
