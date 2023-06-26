import { Template } from "@/templates/Template";
import BottomAction from "@/components/molecules/BottomAction";
import { Box, Typography } from "@mui/material";

export default function NotfoundWikiPage() {
  return (
    <Template>
      <Box width={'100%'}>
        <Typography variant="h1">IPhone 14 Pro 블랙</Typography>
        <Typography variant="subtitle1">해당 게시물이 존재하지 않습니다.</Typography>
      </Box>
      <BottomAction
        right="새로운 위키 만들기"
        rightAction={() => {}}
      />
    </Template>
  );
}
