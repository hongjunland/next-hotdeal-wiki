import Hotdeal from "@/pages/hotdeal/[id]";
import { Typography, styled } from "@mui/material";
import Link from "next/link";

const StyledAside = styled("aside")`
  padding-top: 4rem;
  position: sticky;
  width: 300px;
  height: 100vh;
  top: 0;
  overflow-y: auto;
  min-width: 300px;
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
export default function Aside() {
  return (
    <StyledAside>
      <RecentHotdealList />
    </StyledAside>
  );
}
interface Hotdeal {
  id: number;
  title: string;
}
const hotdealsData: Hotdeal[] = [
  { id: 1, title: "아이폰" },
  { id: 2, title: "갤럭시 노트" },
  { id: 3, title: "맥북" },
  { id: 4, title: "나이키 덩크 로우" },
  { id: 5, title: "아디다스 슈퍼스타" },
  { id: 6, title: "갤럭시 폴드" },
  { id: 7, title: "갤럭시 z플립" },
];
function RecentHotdealList() {
  return (
    <div>
      <Typography variant="h4">최근 핫딜목록</Typography>
      <div>
        {hotdealsData.map((hotdeal: Hotdeal) => (
          <RecentHotdealItem key={hotdeal.id} hotdeal={hotdeal} />
        ))}
      </div>
    </div>
  );
}
interface RecentHotdealItemProps {
  hotdeal: Hotdeal;
}
function RecentHotdealItem({ hotdeal }: RecentHotdealItemProps) {
  return (
    <div>
      <Link href={`/hotdeal/${hotdeal.title}`}>{hotdeal.title}</Link>
    </div>
  );
}
