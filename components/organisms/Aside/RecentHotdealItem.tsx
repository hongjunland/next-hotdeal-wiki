import { RecentHotdeal } from "@/types/Hotdeal/RecentHotdeal";
import { formatTime } from "@/utils/date";
import { Typography, styled } from "@mui/material";
import Link from "next/link";

interface RecentHotdealItemProps {
  hotdeal: RecentHotdeal;
}

export default function RecentHotdealItem({ hotdeal }: RecentHotdealItemProps) {
  return (
    <StyledWrapper>
      <Link href={`/hotdeal/${hotdeal.title}`}>
        <Typography color="primary">{hotdeal.title}</Typography>
        <Typography color="secondary">
          {formatTime(hotdeal.updatedAt)}
        </Typography>
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled("div")`
  margin: 18px 0;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;

  a {
    display: flex;
    width: 100%;
    color: inherit;
    justify-content: space-between;
  }

  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
    border-left: 4px solid #f50057;
  }
`;
