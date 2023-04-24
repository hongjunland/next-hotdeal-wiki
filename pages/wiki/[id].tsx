import { Template } from "@/templates/Template";
import { Box, Button, Typography, styled } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";

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
const Content = styled("div")`
  width: 100%;
  word-wrap: break-word;
`;
export default function WikiPage() {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, error, data } = useQuery("wiki", async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      {
        query: `
        query{
          wiki(id:1){
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
    return response.data.data.wiki;
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <div style={{ margin: "auto auto" }}>Loading...</div>;
  }

  if (error) {
    return <div>Error: (error)</div>;
  }
  return (
    <Template>
      <Article>
        <Box borderBottom={"1px solid gray"} paddingBottom={"2rem"} display={'flex'}>
          <Typography variant="h1">{data.title}</Typography>
          <Link href={`/edit/${id}`}>수정</Link>
        </Box>
        <Content>{data.content}</Content>
      </Article>
    </Template>
  );
}
