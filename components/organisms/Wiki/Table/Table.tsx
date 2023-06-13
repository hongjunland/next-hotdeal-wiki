import Container from "@/components/atoms/Container";
import styled from "@emotion/styled";
import { Box, Button, Switch, Typography } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

export default function Table() {
  return (
    <StyledContainer>
      <TableHeader>
        <Typography variant="h3" flex={1}>
          핫딜 목록
        </Typography>
      </TableHeader>
      <Box width={"100%"}>
        <DataGrid columns={columns} rows={hotdealsData} 
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        />
      </Box>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)``;

const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

const columns = [
  {
    field: "date",
    headerName: "작성일",
    width: 160,
    editable: false,
  },
  {
    field: "title",
    headerName: "제목",
    width: 500,
    editable: false,
    sortable: false,
  },
  {
    field: "status",
    headerName: "상태",
    width: 60,
    sortable: false,
    editable: false,
  },
  {
    field: "price",
    headerName: "가격",
    type: "number",
    width: 120,
    editable: false,
  },
  {
    field: "url",
    headerName: "URL",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 36,
    editable: false,
    renderCell: (props: GridRenderCellParams) => {
      return (
        <Box justifyContent={'center'} alignContent={'center'}>
          <Link href={props.value} style={{display: 'flex'}}>
            <LinkIcon sx={{ color: "#333" }} />
          </Link>
        </Box>
      );
    },
  },
];
interface Hotdeal {
  id: number;
  date: string;
  title: string;
  status: string;
  price: number;
  url: string;
}
const hotdealsData = [
  {
    id: 1,
    date: "2023-06-04 16:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1247320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 2,
    date: "2023-06-05 16:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1247320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 3,
    date: "2023-06-06 16:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1247320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 4,
    date: "2023-06-07 12:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1347320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 5,
    date: "2023-06-08 18:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1347320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 5,
    date: "2023-06-09 11:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1347320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 6,
    date: "2023-06-10 15:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1347320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 7,
    date: "2023-06-11 12:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1347320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 8,
    date: "2023-06-12 18:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1347320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 9,
    date: "2023-06-13 22:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1347320,
    url: "http://localhost:3000/wiki/1",
  },
  {
    id: 10,
    date: "2023-06-14 23:23",
    title: "[쿠팡] 아이폰14프로 128 (1,247,500원)",
    status: "핫딜",
    price: 1347320,
    url: "http://localhost:3000/wiki/1",
  },
];
