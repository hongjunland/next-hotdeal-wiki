import { Box, Typography } from "@mui/material";
import { wikiDatas } from "./wikiDatas";
import { RecentWiki } from "@/types/Hotdeal/RecentHotdeal";
import RecentWikiItem from "./RecentWikiItem";

export default function RecentWikiList() {
  return (
    <Box padding={"1rem"}>
      <Box border={"1px solid gray"} padding={"0.5rem"}>
        <Typography variant="h4">최근 핫딜목록</Typography>
        <div>
          {wikiDatas.map((wiki: RecentWiki) => (
            <RecentWikiItem key={wiki.id} wiki={wiki} />
          ))}
        </div>
      </Box>
    </Box>
  );
}
