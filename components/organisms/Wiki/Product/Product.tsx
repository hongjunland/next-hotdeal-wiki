import Container from "@/components/atoms/Container";
import styled from "@emotion/styled";
import {
  Button,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useRouter } from "next/router";
import Figure from "@/components/molecules/Figure";
const imageSrc =
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIXz4RMJPvfVssxpXXEnjlHhjVYJNW_fidE_ICyKWUY6to4COitF-YGWGo6SwpzVLEPPRY_GeGm3qtTDOGhL6gZS7UML1jLg9O1X-xJhJGKuaUe6g1wbaS&usqp=CAc";

export default function Product() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleButtonClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledContainer>
      <Figure src={imageSrc} alt="IPhone 14 Pro 블랙" />
      <Content>
        <MainContent>
          <MainContentHeader>
            <MainContentTitle>
              <Typography variant="h1" flex={1} marginBottom={0}>
                IPhone14 Pro 128G 블랙
              </Typography>
              {/* <IconButton
                sx={{
                  border: "solid 1px #cccccc",
                  borderRadius: "4px",
                  padding: "4px",
                  width: "32px",
                  height: "32px",
                }}
                color="primary"
                onClick={handleButtonClick}
              >
                <MoreHorizIcon fontSize="medium" />
              </IconButton> */}
              {/* <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => router.push("/edit/1")}>
                  <ListItemIcon>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                  핫딜 추가
                </MenuItem>
              </Menu> */}
            </MainContentTitle>
            <PriceWrapper>
              <Typography variant="h3" flex={1}>
                현재최저가
              </Typography>
              <Typography variant="h3" textAlign={"right"} flex={1}>
                1,247,500원
              </Typography>
            </PriceWrapper>
            <PriceWrapper>
              <Typography variant="h3" flex={1}>
                정가
              </Typography>
              <Typography variant="h3" textAlign={"right"} flex={1}>
                1,247,500원
              </Typography>
            </PriceWrapper>
          </MainContentHeader>
          <Description>
            <PriceWrapper>
              <Typography variant="h4" flex={1}>
                역대최저가
              </Typography>
              <Typography variant="h4" textAlign={"right"} flex={1}>
                1,147,500원
              </Typography>
            </PriceWrapper>
            <PriceWrapper>
              <Typography variant="h4" flex={1}>
                최근평균가
              </Typography>
              <Typography variant="h4" textAlign={"right"} flex={1}>
                1,347,500원
              </Typography>
            </PriceWrapper>
          </Description>
        </MainContent>
        <ActionContent>
          <Button fullWidth variant="contained" size="large">
            최저가로 사러가기
          </Button>
        </ActionContent>
      </Content>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  /* border-bottom: 1px #CCC solid; */
`;

const Content = styled.div`
  display: flex;
  min-height: 340px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 5px;
  gap: 10px;
  width: 100%;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 0px;
  width: 100%;
  justify-content: space-between;
`;
const MainContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cccccc;
`;
const MainContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ActionContent = styled.div`
  display: flex;
  width: 100%;
`;
