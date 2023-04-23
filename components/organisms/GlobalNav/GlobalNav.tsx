import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { useState } from "react";

import {
  StyledNav,
  StyledContainer,
  StyledLogo,
  StyledSearchButton,
} from "./GlobalNav.styles";
import SearchModal from "./SearchModal";

export default function GlobalNav() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleSearchButtonClick = () => {
    setSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setSearchModalOpen(false);
  };

  return (
    <StyledNav>
      <StyledContainer>
        <Grid container alignItems="center" justifyContent="space-between" margin={'auto'}>
          <Grid item>
            <Link href={"/"}>
              <StyledLogo />
            </Link>
          </Grid>
          <Grid item paddingRight={'0.5rem'}>
            <StyledSearchButton onClick={handleSearchButtonClick}>
              <SearchIcon />
              Search…
            </StyledSearchButton>
          </Grid>
        </Grid>
      </StyledContainer>
      <SearchModal
        open={searchModalOpen}
        onClose={handleCloseSearchModal}
      />
    </StyledNav>
  );
}
