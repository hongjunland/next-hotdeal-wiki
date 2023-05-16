import { wikiAPI } from "@/api/wikiAPI";
import Article from "@/components/organisms/Article";
import Content from "@/components/organisms/Article/Content";
import { Template } from "@/templates/Template";
import { Wiki, WikiPage, WikiVersion } from "@/types/Hotdeal/wiki";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { QueryClient, dehydrate, useQuery } from "react-query";


export default function HistoryPage() {
  const router = useRouter();
  const { title } = router.query;
  const { data: wiki, status } = useQuery('wiki', ()=>wikiAPI.fetchWikiByTitle(title as string));
  if (status === 'loading') {
    return <div>Loading...</div>
  }
  if (status === 'error') {
    return <div>error...</div>
  }

  if (router.isFallback) {
    return (
      <>
        <div>Not found router!!!!</div>
      </>
    );
  }
  if (!wiki) {
    return (
      <>
        <div>Not found data!!!!</div>
      </>
    );
  }
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
                        href={`/wiki/${wiki.title}?versionId=${wikiVersion.id}`}
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
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('wiki', ()=>wikiAPI.fetchWikiByTitle(title));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
