import styled from "@emotion/styled";
import { List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";

export default function Aside() {
  return (
    <StyledAside>
      <Typography variant="h3" marginBottom={0}>
        최근 변경
      </Typography>
      <List>
        {wikiData.map((wiki) => (
          <AsideListItem key={wiki.id} wiki={wiki} />
        ))}
      </List>
    </StyledAside>
  );
}
const StyledAside = styled.aside`
  position: sticky;
  top: 0;
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 50px;
  border-left: 1px solid #CCC;
  @media (max-width: 1200px) {
    display: none;
  }
`;

function AsideListItem({ wiki }: any) {
  return (
    <ListItem disablePadding>
      <ListItemButton disableGutters>
        <ListItemText
          primary={<Typography variant="body1" marginBottom={0}>{wiki.title}</Typography>}
          secondary={
            <Typography variant="body2" color={"primary"} marginBottom={0}>{wiki.price}{"원"}</Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
const wikiData = [
  {
    id: 11,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 21,
    title: "IPhone14 Pro 256G 블랙",
    price: "1,335,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 31,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 41,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 51,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 61,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 71,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 81,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 91,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 101,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
];
