import Container from "@/components/atoms/Container";
import styled from "@emotion/styled";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export default function TabList() {
  const [toggle, setToggle] = useState("전체");
  const handleChangeToggle = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string
  ) => {
    console.log(value);
    setToggle(value);
  };
  return (
    <ToggleWrapper>
      <ToggleButtonGroup
        color="primary"
        value={toggle}
        exclusive
        onChange={handleChangeToggle}
        aria-label="Platform"
        size="medium"
        sx={{ border: "1px solid #CCC" }}
      >
        <StyledToggleButton value="1개월" sx={{ border: 0 }}>
          1개월
        </StyledToggleButton>
        <StyledToggleButton value="3개월" sx={{ border: 0 }}>
          3개월
        </StyledToggleButton>
        <StyledToggleButton value="6개월" sx={{ border: 0 }}>
          6개월
        </StyledToggleButton>
        <StyledToggleButton value="1년" sx={{ border: 0 }}>
          1년
        </StyledToggleButton>
        <StyledToggleButton value="전체" sx={{ border: 0 }}>
          전체
        </StyledToggleButton>
      </ToggleButtonGroup>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  gap: 10px;
  button {
    flex: 1;
  }
`;

const StyledToggleButton = styled(ToggleButton)`
  &.Mui-selected {
    /* color: #FFF; 
    background-color: rgba(245, 0, 87, 0.8); */
  }
`;
