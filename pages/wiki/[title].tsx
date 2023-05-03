import { wikiAPI } from "@/api/wikiAPI";
import Article from "@/components/organisms/Article";
import Content from "@/components/organisms/Article/Content";
import NotFound from "@/components/organisms/Wiki/Notfound";
import { Template } from "@/templates/Template";
import { Wiki, WikiPage, WikiVersion } from "@/types/Hotdeal/wiki";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { QueryClient, dehydrate, useQuery } from "react-query";

export default function WikiPage() {
  const router = useRouter();
  const { title } = router.query;
  const { data : wiki, status } = useQuery('wiki', ()=>wikiAPI.fetchWikiByTitle(title as string));
  const url = router.asPath;
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
    const suffix = "/wiki/";
    const pos = url.lastIndexOf(suffix);
    const title =
      pos !== -1 ? router.asPath.substring(pos + suffix.length) : router.asPath;
    return (
      <NotFound title={title}/>
    );
  }

  return (
    <Template>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          display={"flex"}
          justifyContent={'space-between'}
        >
          <Typography variant="h1">{wiki.title}</Typography>
          <Link href={`/history/${wiki.title}`}>역사</Link>
          <Link href={`/edit/${wiki.title}`}>수정</Link>
        </Box>
        <Content>{wiki.content}</Content>
      </Article>
    </Template>
  );
}
interface WikiTitle {
  title: string;
}
export async function getStaticPaths() {
  // const wikis = await wikiAPI.fetchAllWikiTitle();
  const wikis = await wikiAPI.fetchAllWikis();
  const paths = wikis.items?.flatMap((wiki: Wiki)=>{
    const versions = wiki.versions?.map((version: WikiVersion) => ({
      params: { title: wiki.title.toString(), version: version.id.toString() }
    })) || []
    return [
      { params: { title: wiki.title.toString() }},
      ...versions
    ]
  });
  return {
    // paths: wikis.map((wiki: WikiTitle) => ({
    //   params: { title: wiki.title.toString() },
    // })),
    paths: paths,
    fallback: 'blocking',
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
    revalidate: 1,
  };
}
