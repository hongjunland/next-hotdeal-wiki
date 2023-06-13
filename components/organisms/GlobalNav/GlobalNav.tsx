import Container from "@/components/atoms/Container";
import Logo from "@/components/atoms/Logo";
import styled from "@emotion/styled";
import { Button, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Search } from "@mui/icons-material";
import Link from "next/link";


export default function GlobalNav() {
  return (
    <nav className={"global-nav"}>
      <NavContainer>
        <Link href='/'>
          <Logo src={"/logo.svg"} alt={"logo"}/>
        </Link>
        <NavItem>
          <SearchButton size="medium" startIcon={<Search/>}><Typography color={"#CCC"} variant="inherit">search...</Typography></SearchButton>
        </NavItem>
      </NavContainer>
    </nav>
  );
}
const StyledIcon = styled(MoreVertIcon)`
  border: 1px solid rgba(245, 0, 87, 0.87);
  border-radius: 4px;
`;
const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 10px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const SearchButton = styled(Button)`
  border: solid 1px;
`;