import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { Block, BlockNoteEditor } from "@blocknote/core";
import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { wikiAPI } from "@/api/wikiAPI";

export default function WritePage() {
  const router = useRouter();
  const [blocks, setBlocks] = useState<Block[]>();
  
  useEffect(() => {
    if (router.query.title) {
      wikiAPI.fetchWikiByTitle(router.query.title as string).then((item) => {
        if (item) {
          router.push(`/edit/${router.query.title}`);
        }
      });
    }
  }, [router]);

  const editor: BlockNoteEditor | null = useBlockNote({
    initialContent: blocks || [],
    onEditorContentChange: (editor: BlockNoteEditor) => {
      setBlocks(editor.topLevelBlocks);
    },
  });

  const handleCreateClick = async () => {
    const content = blocks ? JSON.stringify(blocks).replaceAll(`"`, `'`) : "";
    const input = { title: router.query.title?.toString(), content: content };
    await wikiAPI.createWiki(input);
    router.replace(`/wiki/${router.query.title}`);
  };

  return (
    <Template>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography variant="h1">{router.query.title}</Typography>
          <Button onClick={handleCreateClick}>작성완료</Button>
        </Box>
        <div>
          <BlockNoteView editor={editor} />
        </div>
      </Article>
    </Template>
  );
}
