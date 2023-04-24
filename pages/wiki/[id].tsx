import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { Wiki } from "@/types/Hotdeal/wiki";
import { Box, Typography, styled } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

interface WikiPageProps {
  wiki: Wiki;
}

const Content = styled("div")`
  width: 100%;
  word-wrap: break-word;
`;

export default function WikiPage({ wiki }: WikiPageProps) {
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
          <Typography variant="h1">{wiki.title}</Typography>
          <Link href={`/edit/${wiki.id}`}>수정</Link>
        </Box>
        <Content>{wiki.content}</Content>
      </Article>
    </Template>
  );
}

export async function getServerSideProps(context: {
  query: { id: string };
}) {
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
