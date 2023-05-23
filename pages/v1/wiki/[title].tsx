import "@blocknote/core/style.css";
import { wikiAPI } from "@/api/wikiAPI";
import Article from "@/components/organisms/Article";
import NotFound from "@/components/organisms/Wiki/Notfound";
import { Template } from "@/templates/Template";
import { Wiki, WikiPage, WikiVersion } from "@/types/Hotdeal/wiki";
import { Block, BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QueryClient, dehydrate, useQuery } from "react-query";
import Head from "next/head";

export default function WikiPage() {
  const router = useRouter();
  const { title, versionId } = router.query;
  const { data: wiki, status } = useQuery("wiki", () =>
    wikiAPI.fetchWikiByTitle(title as string)
  );
  const [wikiVersion, setWikiVersion] = useState<WikiVersion>();
  const decodeContent = (encodedContent: string) => {
    const decodedContent = encodedContent
      ? JSON.parse(encodedContent
        ?.replaceAll(`'`, `"`)
        .replaceAll('\\n',','))
      : "";
    return decodedContent as Block[];
  };

  const [blocks, setBlocks] = useState<Block[]>(
    versionId
      ? decodeContent(
          wiki?.versions.find((item: WikiVersion) => item.id === versionId)
            ?.content || ""
        )
      : decodeContent(wiki?.content || "")
  );

  const editor: BlockNoteEditor | null = useBlockNote({
    editable: false,
    initialContent: blocks || [],
    onEditorContentChange: (editor: BlockNoteEditor) => {
      setBlocks(editor.topLevelBlocks);
    },
  });
  useEffect(() => {
    if (wiki && editor) {
      if (!versionId) {
        setWikiVersion(wiki.versions[0]);
        editor.replaceBlocks(
          editor.topLevelBlocks,
          decodeContent(wiki.versions[0].content)
        );
      } else {
        const newWikiVersion = wiki.versions.find(
          (item: WikiVersion) => item.id === versionId
        );
        if (newWikiVersion) {
          setWikiVersion(newWikiVersion);
          editor.replaceBlocks(
            editor.topLevelBlocks,
            decodeContent(newWikiVersion.content)
          );
        } else {
          router.push(`/wiki/${wiki.title}`);
        }
      }
    }
  }, [versionId, wiki, wikiVersion, setBlocks, editor, router]);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>error...</div>;
  }

  if (router.isFallback) {
    return (
      <>
        <div>Not found router!!!!</div>
      </>
    );
  }

  if (!wiki || (!wikiVersion && versionId)) {
    const suffix = "/wiki/";
    // const pos = url.lastIndexOf(suffix);
    if (title) {
      // const title =
      //   pos !== -1 ? router.asPath.substring(pos + suffix.length) : router.asPath;
      return <NotFound title={title} versionId={versionId} />;
    }
  }
  return (
    <>
      <Template>
        <Head>
          <title>{wiki?.title} - 핫딜위키</title>
        </Head>
        <Article>
          <Box
            borderBottom={"1px solid gray"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography variant="h1">
              {wikiVersion?.title}
              {versionId && `(version: ${versionId})`}
            </Typography>
            <Link href={`/history/${title}`}>
              <Typography color={"#333"}>역사</Typography>
            </Link>
            {!versionId && (
              <Link href={`/edit/${title}`}>
                <Typography color={"#333"}>수정</Typography>
              </Link>
            )}
          </Box>
          <div>
            <BlockNoteView editor={editor} />
          </div>
        </Article>
      </Template>
    </>
  );
}
export async function getStaticPaths() {
  const wikis = await wikiAPI.fetchAllWikis();
  const paths = wikis.items?.flatMap((wiki: Wiki) => {
    const versions =
      wiki.versions?.map((version: WikiVersion) => ({
        params: {
          title: wiki.title.toString(),
          versionId: version.id.toString(),
        },
      })) || [];
    return [{ params: { title: wiki.title.toString() } }, ...versions];
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
}

interface GetStaticPropsContext {
  params: {
    title: string;
    versionId?: string;
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { title } = context.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("wiki", () =>
    wikiAPI.fetchWikiByTitle(title)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  };
}
