import Container from "@/components/atoms/Container";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  IconButton,
  Menu,
  Popover,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

export default function Table() {
  return (
    <StyledContainer>
      <TableHeader>
        <Typography variant="h3" flex={1}>
          핫딜 목록
        </Typography>
      </TableHeader>
      <Box width={"100%"}>
        <DataGrid
          columns={columns}
          rows={hotdealsData}
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
    renderCell: (props: GridRenderCellParams) => {
      return (
        <Box justifyContent={"center"} alignContent={"center"}>
          <Link href={props.value} style={{ display: "flex" }}>
            {props.row.title}
          </Link>
        </Box>
      );
    },
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
    field: "action",
    headerName: "",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 36,
    editable: false,
    renderCell: (props: GridRenderCellParams) => <DeleteCell />,
  },
];
function DeleteCell() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleButtonClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box justifyContent={"center"} alignContent={"center"}>
      <IconButton onClick={handleButtonClick}>
        <DisabledByDefaultIcon fontSize="medium" />
      </IconButton>
        <Popover
        anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        <Box padding={'15px 5px 0 5px'} display={'flex'} gap={'5px'}>
          <TextField label="비밀번호" type="password" size="medium" />
          <Button size="large" variant="contained" color="secondary" sx={{marginBottom: '16px'}}>
            확인
              </Button>
          </Box>
        </Popover>
    </Box>
  );
}
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
    id: 12,
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
