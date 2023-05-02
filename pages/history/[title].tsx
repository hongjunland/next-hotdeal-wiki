import { wikiAPI } from "@/api/wikiAPI";
import Article from "@/components/organisms/Article";
import Content from "@/components/organisms/Article/Content";
import NotFound from "@/components/organisms/Wiki/Notfound";
import { Template } from "@/templates/Template";
import { Wiki, WikiPage, WikiVersion } from "@/types/Hotdeal/wiki";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface WikiPageProps {
  wiki: Wiki;
}

export default function HistoryPage({ wiki }: WikiPageProps) {
  console.log(wiki.versions);
  return (
    <Template>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography variant="h1">{wiki.title} (문서 역사)</Typography>
          <Link href={`/edit/${wiki.title}`}>수정</Link>
        </Box>
        <Content>
          <div>
            <ul>
              <>
                {wiki.versions.map((wikiVersion: WikiVersion) => (
                  <li key={wikiVersion.id}>
                    <Typography>
                      {wikiVersion.createdAt} -{" "}
                      <Link
                        href={`/wiki/${wiki.title}?version=${wikiVersion.id}`}
                      >
                        [보기]
                      </Link>
                    </Typography>
                  </li>
                ))}
              </>
            </ul>
          </div>
        </Content>
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
    fallback: false,
  };
}

interface GetStaticPropsContext {
  params: {
    title: string;
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { title } = context.params;
  const wiki = await wikiAPI.fetchWikiByTitle(title);

  return {
    props: {
      wiki,
    },
  };
}
