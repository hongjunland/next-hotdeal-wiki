import styled from "@emotion/styled";
import { List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import Link from "next/link";
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
    id: 1,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 2,
    title: "IPhone14 Pro 256G 블랙",
    price: "1,335,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 3,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 4,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 5,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 6,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 7,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 8,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 9,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 10,
    title: "IPhone14 Pro 128G 블랙",
    price: "1,235,233",
    url: "http://localhost:3000/wiki/1",
  },
];
