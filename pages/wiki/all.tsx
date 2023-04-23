import { wikiPageState } from "@/recoil/atoms/wikiPageState";
import { Template } from "@/templates/Template";
import { Wiki, WikiPage } from "@/types/Hotdeal/wiki";
import { Typography, styled } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";

const Content = styled("div")`
  width: 100%;
  word-wrap: break-word;
`;

const Article = styled("article")`
  font-size: 60px;
  margin-bottom: 200px;
  padding-top: 4rem;
  @media (width > 950px) {
    width: calc(100% - 300px);
  }
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export default function AllWikiList() {
  const setWikiPage = useSetRecoilState(wikiPageState);
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

  useEffect(() => {
    if (data) {
      setWikiPage(data);
    }
  }, [data, setWikiPage]);

  if (isLoading) {
    return <div style={{ margin: "auto auto" }}>Loading...</div>;
  }

  if (error) {
    return <div>Error: (error)</div>;
  }

  return (
    <Template>
      <Article>
        <Typography
          variant="h1"
          borderBottom={"1px solid gray"}
          paddingBottom={"2rem"}
        >
          리스트
        </Typography>
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
