import Article from "@/components/organisms/Article";
import Content from "@/components/organisms/Article/Content";
import { Template } from "@/templates/Template";
import { Wiki, WikiPage } from "@/types/Hotdeal/wiki";
import { Box, Typography, styled } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

interface WikiPageProps {
  wiki: Wiki | undefined | null;
}

export default function WikiPage({ wiki }: WikiPageProps) {
  const router = useRouter();
  const url = router.asPath;
  console.log(router);
  if (router.isFallback) {
    return (
      <>
        <div>Not found router!!!!</div>
        <div>Not found router!!!!</div>
        <div>Not found router!!!!</div>
        <div>Not found router!!!!</div>
      </>
    );
  }
  if (!wiki) {
    console.log(router.asPath);
    const suffix = '/wiki/';
    const pos = url.lastIndexOf(suffix);
    const title = pos !== -1 ? router.asPath.substring(pos + suffix.length) : router.asPath;
    return (
      <Template>
        <Article>
          <Box
            borderBottom={"1px solid gray"}
            paddingBottom={"2rem"}
            display={"flex"}
          >
            <Typography variant="h1">{title}</Typography>
          </Box>
          <Content>
            <Typography variant="h3">해당 문서가 존재하지 않습니다.</Typography>
            <Link href={`/edit/${title}`}><Typography>새 문서 만들기</Typography></Link>
          </Content>
        </Article>
      </Template>
    );
  }
  console.log("sadasd");

  return (
    <Template>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          paddingBottom={"2rem"}
          display={"flex"}
        >
          <Typography variant="h1">{wiki.title}</Typography>
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
  console.log("getStaticPaths");
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
      props: {
        wiki: null,
      },
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
