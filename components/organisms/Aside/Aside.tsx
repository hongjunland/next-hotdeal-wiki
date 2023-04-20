import { styled } from "@mui/material";
import RecentHotdealList from "./RecentHotdealList";

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

