import { RecentWiki } from "@/types/Hotdeal/RecentHotdeal";
import { formatTime } from "@/utils/date";
import { Typography, styled } from "@mui/material";
import Link from "next/link";

interface RecentWikiItemProps {
  wiki: RecentWiki;
}

export default function RecentWikiItem({ wiki }: RecentWikiItemProps) {
  return (
    <StyledWrapper>
      <Link href={`/wiki/${wiki.title}`}>
        <Typography color="primary">{wiki.title}</Typography>
        <Typography color="secondary">
          {formatTime(wiki.updatedAt)}
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
