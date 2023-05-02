import { wikiAPI } from "@/api/wikiAPI";
import Article from "@/components/organisms/Article";
import Content from "@/components/organisms/Article/Content";
import NotFound from "@/components/organisms/Wiki/Notfound";
import { Template } from "@/templates/Template";
import { Wiki, WikiPage } from "@/types/Hotdeal/wiki";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface WikiPageProps {
  wiki: Wiki | null;
}

export default function WikiPage({ wiki }: WikiPageProps) {
  const router = useRouter();
  const url = router.asPath;
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
          <Link href={`/history/${wiki.title}`}>변경기록</Link>
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
  const wikis = await wikiAPI.fetchAllWikiTitle();
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

export async function getStaticProps(context: GetStaticPropsContext) {
  const { title } = context.params;
  const wiki = await wikiAPI.fetchWikiByTitle(title);
  if (!wiki) {
    return {
      props: {
        wiki: null,
      },
    };
  }

  return {
    props: {
      wiki,
    },
    revalidate: 1,
  };
}
