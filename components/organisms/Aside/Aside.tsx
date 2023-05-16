import { styled } from "@mui/material";
import RecentWikiList from "./RecentWikiList";
import { useQuery } from "react-query";
import { wikiAPI } from "@/api/wikiAPI";

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
  const {data: wikis} = useQuery("wikis", wikiAPI.fetchAllWikis)
  return (
    <StyledAside>
      <RecentWikiList wikis={wikis?.items|| []}/>
    </StyledAside>
  );
}

