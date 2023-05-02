import { wikiAPI } from "@/api/wikiAPI";
import { Content } from "@/components/organisms/Article";
import Article from "@/components/organisms/Article/Article";
import { Template } from "@/templates/Template";
import { Nullable, Wiki } from "@/types/Hotdeal/wiki";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function AllWikiList() {
  const { isLoading, error, data } = useQuery("allWiki", async () => {
    const wikiPage = await wikiAPI.fetchAllWikis();
    console.log(wikiPage);
    return wikiPage;
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
          {data?.items?.map((wiki: Wiki) => {
            return <WikiItem wiki={wiki} key={wiki.id} />;
          })}
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
