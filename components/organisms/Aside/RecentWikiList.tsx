import { Box, Typography } from "@mui/material";
import RecentWikiItem from "./RecentWikiItem";
import { Wiki } from "@/types/Hotdeal/wiki";
interface Props{
  wikis : Wiki[];
}
export default function RecentWikiList({wikis}: Props) {
  return (
    <Box padding={"1rem"}>
      <Box border={"1px solid gray"} padding={"0.5rem"}>
        <Typography variant="h4">최근 핫딜목록</Typography>
        <div>
          {wikis.map((wiki: Wiki) => (
            <RecentWikiItem key={wiki.id} wiki={wiki} />
          ))}
        </div>
      </Box>
    </Box>
  );
}
