import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { Wiki, WikiPage } from "@/types/Hotdeal/wiki";
import { Box, Typography, styled } from "@mui/material";
import axios from "axios";
import Link from "next/link";

const Content = styled("div")`
  width: 100%;
  word-wrap: break-word;
`;

interface WikiPageProps {
  wiki: Wiki;
}

export default function WikiPage({wiki} : WikiPageProps) {
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
interface WikiId {
  id: string;
}
export async function getStaticPaths() {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    {
      query: `
    query {
      listWiki {
        items {
          id
        }
      }
    }
    `,
    }
  );
  const wikis = response.data.data.listWiki.items;

  return {
    paths: wikis.map((wiki: WikiId) => ({
      params: { id: wiki.id.toString() },
    })),
    fallback: false,
  };
}
interface GetStaticPropsContext {
  params: {
    id: string;
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params;

  const response = await axios.post<Wiki>(
    `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    {
      query: `
        query {
          wiki(id: ${id}) {
            id
            title
            content
            versions {
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

  const wiki = response.data.data.wiki;

  return {
    props: {
      wiki,
    },
  };
}