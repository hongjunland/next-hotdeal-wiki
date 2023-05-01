import { Content } from "@/components/organisms/Article";
import Article from "@/components/organisms/Article/Article";
import { Template } from "@/templates/Template";
import { Wiki, WikiPage } from "@/types/Hotdeal/wiki";
import { Box, Typography, styled } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function AllWikiList() {
  const { isLoading, error, data } = useQuery("allWiki", async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      {
        query: `
        query {
          listWiki {
            items {
              id
              content
              title
              versions {
                id
                title
                content
                diff
                createdAt
              }
            }
            total
          }
        }
      `,
      }
    );
    return response.data.data.listWiki;
  });

  useEffect(() => {}, [data]);

  if (isLoading) {
    return <div style={{ margin: "auto auto" }}>Loading...</div>;
  }

  if (error) {
    return <div>Error: (error)</div>;
  }

  return (
    <Template>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          paddingBottom={"2rem"}
          display={"flex"}
        >
          <Typography variant="h1">리스트</Typography>
        </Box>
        <Content>
          {data.items.map((wiki: Wiki) => (
            <WikiItem wiki={wiki} key={wiki.id} />
          ))}
        </Content>
      </Article>
    </Template>
  );
}

interface WikiItemProps {
  wiki: Wiki;
}

function WikiItem({ wiki }: WikiItemProps) {
  return (
    <div>
      <Link href={`/wiki/${wiki.title}`}>{wiki.title}</Link>
    </div>
  );
}
