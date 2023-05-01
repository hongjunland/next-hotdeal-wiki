import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { UpdateWikiInput, Wiki } from "@/types/Hotdeal/wiki";
import { Box, Button, Typography, styled } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import MarkdownIt from "markdown-it";
import { QueryClient, useQueryClient } from "react-query";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});
const mdParser = new MarkdownIt();

import "react-markdown-editor-lite/lib/index.css";
import { useMutation } from "react-query";
import router from "next/router";

interface EditPageProps {
  wiki: Wiki;
}

export default function EditPage({ wiki }: EditPageProps) {
  const [content, setContent] = useState(wiki.content);
  const queryClient = useQueryClient();
  function handleEditorChange({ html, text }: { html: string; text: string }) {
    setContent(text);
  }
  const mutateUpdateWiki = useMutation((input: UpdateWikiInput) =>
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    query: `
      mutation {
        updateWiki(updateWikiInput: {
          id: ${input.id}
          title: "${input.title}"
          content: "${input.content}"
        }) {
          id
          title
          content
          createdAt
          updatedAt
        }
      }
    `,
  }).then(e=> {
    queryClient.invalidateQueries("wiki");
    
  }).finally(e=>{
    router.push(`/wiki/${wiki.id}`);
  })
);

  const handleUpdateClick =  () => {
     mutateUpdateWiki.mutate({
      id: parseInt(wiki.id),
      title: title,
      content: content,
    })
     
    
  };
  const [title, setTitle] = useState(wiki.title);
  useEffect(() => {
    console.log(wiki);
  }, [wiki]);

  return (
    <Template>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          paddingBottom={"2rem"}
          display={"flex"}
        >
          {/* <Typography variant="h1">{wiki.title}</Typography> */}
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <Button
            onClick={handleUpdateClick}
          >
            수정완료
          </Button>
        </Box>
        <div>
          <MdEditor
            value={content}
            onChange={handleEditorChange}
            renderHTML={(text) => mdParser.render(text)}
          />
          <div dangerouslySetInnerHTML={{ __html: mdParser.render(content) }} />
        </div>
      </Article>
    </Template>
  );
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    {
      query: `
        query{
          wiki(id:${id}){
              id
              content
              title
              versions{
                  id
                  title
                  content
                  diff
                  createdAt
              }
          }
          }
      `,
    }
  );
  return {
    props: {
      wiki: response.data.data.wiki,
    },
  };
}

