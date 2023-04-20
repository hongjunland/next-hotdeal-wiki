import { Box, Typography } from "@mui/material";
import { hotdealsData } from "./hotdealsData";
import { RecentHotdeal } from "@/types/Hotdeal/RecentHotdeal";
import RecentHotdealItem from "./RecentHotdealItem";

export default function RecentHotdealList() {
  return (
    <Box padding={"1rem"}>
      <Box border={"1px solid gray"} padding={"0.5rem"}>
        <Typography variant="h4">최근 핫딜목록</Typography>
        <div>
          {hotdealsData.map((hotdeal: RecentHotdeal) => (
            <RecentHotdealItem key={hotdeal.id} hotdeal={hotdeal} />
          ))}
        </div>
      </Box>
    </Box>
  );
}
