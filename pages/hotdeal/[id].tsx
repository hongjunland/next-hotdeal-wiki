import { Template } from "@/templates/Template";
import { Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

const Article = styled("article")`
  font-size: 60px;
  margin-bottom: 200px;
  padding-top: 4rem;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
  width: calc(100% - 300px);
`;
const Content = styled("div")`
  width: 100%;
  word-wrap: break-word;
`;
export default function Hotdeal() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Template>
      <Article>
        <Typography variant="h1" borderBottom={'1px solid gray'} paddingBottom={'2rem'}>{id}</Typography>
        <Content>
          <p>Post: {id}ddsadsasdsdsdsdsdsdsddsdsdsdssds</p>
          <div>Post: {id}ddsadsasdsdsdsdsdsdsddsdsdsdssds</div>
          <span>Post: {id}ddsadsasdsdsdsdsdsdsddsdsdsdssds</span>
          <p>Post: {id}ddsadsasdsdsdsdsdsdsddsdsdsdssds</p>
          <p>Post: {id}ddsadsasdsdsdsdsdsdsddsdsdsdssds</p>
          <p>Post: {id}ddsadsasdsdsdsdsdsdsddsdsdsdssds</p>
        </Content>
      </Article>
    </Template>
  );
}
