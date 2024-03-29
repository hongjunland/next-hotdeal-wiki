import { Template } from "@/templates/Template";
import Article, { Content } from "../Article";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
interface Props{
    title: string | string[];
    versionId: string | undefined | string[];
}
export default function NotFound({title, versionId}: Props) {
  return (
    <Template>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          display={"flex"}
        >
          <Typography variant="h1">{title} {versionId && `(${versionId})`}</Typography>
        </Box>
        <Content>
          <Typography variant="h3">해당 문서가 존재하지 않습니다.</Typography>
          <Link href={`/write/${title}`}>
            <Typography>새 문서 만들기</Typography>
          </Link>
        </Content>
      </Article>
    </Template>
  );
}
