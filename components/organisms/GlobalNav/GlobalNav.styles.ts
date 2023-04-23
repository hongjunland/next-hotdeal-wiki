import { Container, styled } from "@mui/material";
import Logo from "../../atoms/Logo";

export const StyledNav = styled("nav")(({ theme }) => ({
  width: "100%",
  borderBottom: "1px solid rgba(0, 27, 55, 0.1)",
  borderTop: "1px solid rgba(0, 27, 55, 0.1)",
  position: "fixed",
  zIndex: 9999,
  height: "3rem",
  padding: "0.5rem",
  background: 'white',
  [theme.breakpoints.down("sm")]: {
    height: "2.5rem",
  },
}));

export const SearchButton = styled("button")`
  display: flex;
  align-items: center;
  background-color: rgba(207, 207, 207, 0.15);
  min-width: 200px;
  height: 100%;
  border-radius: 0.5rem;
  border: 0;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
  }
`;

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  padding: 0,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const StyledLogo = styled(Logo)(({ theme }) => ({
  height: "2rem",
  [theme.breakpoints.down("sm")]: {
    height: "1.5rem",
  },
}));

export const StyledSearchButton = styled(SearchButton)(({ theme }) => ({
  height: "2rem",
  marginRight: '0.5rem',
  [theme.breakpoints.down("sm")]: {
    height: "1.5rem",
  },
}));
