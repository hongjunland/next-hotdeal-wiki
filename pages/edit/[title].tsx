import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { UpdateWikiInput, Wiki } from "@/types/Hotdeal/wiki";
import { Box, Button} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import MarkdownIt from "markdown-it";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});
const mdParser = new MarkdownIt();

import "react-markdown-editor-lite/lib/index.css";
import router from "next/router";

interface EditPageProps {
  wiki: Wiki;
}

export default function EditPage({ wiki }: EditPageProps) {

  const [content, setContent] = useState(wiki.content);
  
  function handleEditorChange({ html, text }: { html: string; text: string }) {
    setContent(text);
  }
  
  const updateWiki = async (input: UpdateWikiInput) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      {
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
      }
    );
    router.push(`/wiki/${wiki.title}`);
  };

  const handleUpdateClick = () => {
    updateWiki({
      id: parseInt(wiki.id),
      title: title,
      content: content,
    });
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
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button onClick={handleUpdateClick}>수정완료</Button>
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

export async function getStaticPaths() {
  console.log('getStaticPaths');
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    {
      query: `
        query {
          listWiki {
            items {
              title
            }
          }
        }
    `,
    }
  );
  console.log(response.data.data.listWiki.items);
  const wikis = response.data.data.listWiki.items;

  return {
    paths: wikis.map((wiki: WikiTitle) => ({
      params: { title: wiki.title.toString() },
    })),
    fallback: true,
  };
}
interface GetStaticPropsContext {
  params: {
    title: string;
  };
}

interface WikiTitle {
  title: string;
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const { title } = context.params;
  console.log("getStaticProps");
  console.log(title);
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    {
      query: `
      query{
        wikiByTitle(title:"${title}"){
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
  console.log(response.data.data.wikiByTitle);
  if (
    !response ||
    !response.data ||
    !response.data.data ||
    !response.data.data.wikiByTitle
  ) {
    return {
      props: {},
    };
  }
  const wiki = response.data.data.wikiByTitle;

  return {
    props: {
      wiki,
    },
    revalidate: 1,
  };
}
