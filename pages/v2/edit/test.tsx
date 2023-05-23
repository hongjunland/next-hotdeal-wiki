import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { Hotdeal } from "@/types/Hotdeal/wiki";
import LinkIcon from "@mui/icons-material/Link";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridCallbackDetails,
  GridCellParams,
  GridColDef,
} from "@mui/x-data-grid";
import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const hotdealsData: Hotdeal[] = [
  {
    id: 1,
    title: "[쿠팡] (역대가) 아이폰 14 프로 128G 블랙",
    createdAt: new Date("2023-03-21").toISOString(),
    price: 1254330,
    url: "https://www.coupang.com/vp/products/6790570071?itemId=15997175967&vendorItemId=83202422299&src=1139000&spec=10799999&addtag=460&ctag=6790570071&lptag=AF4133438&itime=20230523001809&pageType=MLSDP&pageValue=6790570071&wPcid=16830361537623983334454&wRef=www.fmkorea.com&wTime=20230523001809&redirect=landing&traceid=V0-183-abc0fa9ef220d511&mcid=69d4e34520a04302945449b628b3d648&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&pageid=&deviceid=&token=&contenttype=&subid=AF4133438&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=1693899591&isAddedCart=",
    status: "REJECTED",
  },
  {
    id: 2,
    title: "[쿠팡] 아이폰14프로 128 (무)",
    createdAt: new Date("2023-05-11").toISOString(),
    price: 1426000,
    url: "https://www.coupang.com/vp/products/6790570071?itemId=15997175967&vendorItemId=83202422299&src=1139000&spec=10799999&addtag=460&ctag=6790570071&lptag=AF4133438&itime=20230522195017&pageType=MLSDP&pageValue=6790570071&wPcid=16830361537623983334454&wRef=www.fmkorea.com&wTime=20230522195017&redirect=landing&traceid=V0-183-abc0fa9ef220d511&mcid=2432c483271d4e8d97a098f33da783fe&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&pageid=&deviceid=&token=&contenttype=&subid=AF4133438&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=904700413&isAddedCart=",
    status: "COMPLETED",
  },
  {
    id: 3,
    title: "아이폰14 Pro",
    createdAt: new Date("2023-05-15").toISOString(),
    price: 1320000,
    url: "https://www.coupang.com/vp/products/6790570989?itemId=15997173206&vendorItemId=83202419847&src=1139000&spec=10799999&addtag=460&ctag=6790570989&lptag=AF4133438&itime=20230523001704&pageType=MLSDP&pageValue=6790570989&wPcid=16830361537623983334454&wRef=www.fmkorea.com&wTime=20230523001704&redirect=landing&traceid=V0-183-6fff0627e1debc8f&mcid=e7254e5c6b40435d89171f6fa7a4c4c5&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&pageid=&deviceid=&token=&contenttype=&subid=AF4133438&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=1693899591&isAddedCart=",
    status: "COMPLETED",
  },
  {
    id: 4,
    title: "아이폰14 Pro",
    createdAt: new Date("2023-05-15").toISOString(),
    price: 1320000,
    url: "https://www.coupang.com/vp/products/6790570989?itemId=15997173206&vendorItemId=83202419847&src=1139000&spec=10799999&addtag=460&ctag=6790570989&lptag=AF4133438&itime=20230523001704&pageType=MLSDP&pageValue=6790570989&wPcid=16830361537623983334454&wRef=www.fmkorea.com&wTime=20230523001704&redirect=landing&traceid=V0-183-6fff0627e1debc8f&mcid=e7254e5c6b40435d89171f6fa7a4c4c5&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&pageid=&deviceid=&token=&contenttype=&subid=AF4133438&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=1693899591&isAddedCart=",
    status: "COMPLETED",
  },
  {
    id: 5,
    title: "아이폰14 Pro",
    createdAt: new Date("2023-05-15").toISOString(),
    price: 1320000,
    url: "https://www.coupang.com/vp/products/6790570989?itemId=15997173206&vendorItemId=83202419847&src=1139000&spec=10799999&addtag=460&ctag=6790570989&lptag=AF4133438&itime=20230523001704&pageType=MLSDP&pageValue=6790570989&wPcid=16830361537623983334454&wRef=www.fmkorea.com&wTime=20230523001704&redirect=landing&traceid=V0-183-6fff0627e1debc8f&mcid=e7254e5c6b40435d89171f6fa7a4c4c5&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&pageid=&deviceid=&token=&contenttype=&subid=AF4133438&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=1693899591&isAddedCart=",
    status: "COMPLETED",
  },
  {
    id: 6,
    title: "아이폰14 Pro",
    createdAt: new Date("2023-05-15").toISOString(),
    price: 1320000,
    url: "https://www.coupang.com/vp/products/6790570989?itemId=15997173206&vendorItemId=83202419847&src=1139000&spec=10799999&addtag=460&ctag=6790570989&lptag=AF4133438&itime=20230523001704&pageType=MLSDP&pageValue=6790570989&wPcid=16830361537623983334454&wRef=www.fmkorea.com&wTime=20230523001704&redirect=landing&traceid=V0-183-6fff0627e1debc8f&mcid=e7254e5c6b40435d89171f6fa7a4c4c5&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&pageid=&deviceid=&token=&contenttype=&subid=AF4133438&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=1693899591&isAddedCart=",
    status: "COMPLETED",
  },
  {
    id: 7,
    title: "아이폰14 Pro",
    createdAt: new Date("2023-05-15").toISOString(),
    price: 1320000,
    url: "https://www.coupang.com/vp/products/6790570989?itemId=15997173206&vendorItemId=83202419847&src=1139000&spec=10799999&addtag=460&ctag=6790570989&lptag=AF4133438&itime=20230523001704&pageType=MLSDP&pageValue=6790570989&wPcid=16830361537623983334454&wRef=www.fmkorea.com&wTime=20230523001704&redirect=landing&traceid=V0-183-6fff0627e1debc8f&mcid=e7254e5c6b40435d89171f6fa7a4c4c5&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&pageid=&deviceid=&token=&contenttype=&subid=AF4133438&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=1693899591&isAddedCart=",
    status: "COMPLETED",
  },
];

interface FormState {
  title: string;
  price: number;
  url: string;
}
export default function EditPage() {
  const [hotdeals, setHotdeals] = useState<Hotdeal[]>(hotdealsData);
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    title: "",
    price: 0,
    url: "",
  });
  const submitModal = () => {
    const newHotdeal: Hotdeal = {
      id: hotdeals.length ? hotdeals[hotdeals.length - 1].id + 1 : 1,
      title: formState.title,
      createdAt: new Date().toISOString(),
      price: formState.price,
      url: formState.url,
      status: "INPROGRESS",
    };
    setHotdeals([...hotdeals, newHotdeal]);
    setFormState({ title: "", price: 0, url: "" } as FormState);
    setOpen(false);
  };
  const columns: GridColDef[] = [
    {
      field: "createdAt",
      headerName: "작성일",
      flex: 1.5,
      editable: false,
      type: "datetime",
      headerAlign: "left",
      renderCell: (params: GridCellParams) => (
        <Typography
          variant="body1"
          fontSize={10}
          align="center"
          style={{ margin: "auto" }}
        >
          {params?.row?.createdAt || ""}
        </Typography>
      ),
    },
    {
      field: "title",
      headerName: "제목",
      flex: 4,
      editable: false,
      headerAlign: "center",
      renderCell: (params: GridCellParams) => (
        <Typography
          style={{
            margin: "auto",
            textDecoration:
              params?.row?.status === "REJECTED" ? "line-through" : "none",
            color: params?.row?.status === "REJECTED" ? "red" : "inherit",
            textAlign: "left",
          }}
        >
          {params?.row?.title.toString() || ""}
        </Typography>
      ),
    },
    {
      field: "price",
      headerName: "가격 (원)",
      type: "number",
      flex: 1,
      editable: false,
      headerAlign: "right",
    },

    {
      field: "status",
      headerName: "진행 상태",
      type: "string",
      flex: 2,
      editable: false,
      sortable: false,
      headerAlign: "center",
      renderCell: (params: GridCellParams) => (
        <ToggleButtonGroup
          value={params.row.status}
          exclusive
          onChange={(e, value) => {
            handleToggleStatus(params.row.id, value);
          }}
          aria-label="Platform"
        >
          <ToggleButton value="REJECTED" color="secondary">
            기각
          </ToggleButton>
          <ToggleButton value="INPROGRESS" color="primary">
            진행
          </ToggleButton>
          <ToggleButton value="COMPLETED" color="info">
            종료
          </ToggleButton>
        </ToggleButtonGroup>
      ),
    },
    {
      field: "url",
      headerName: "",
      type: "string",
      flex: 0.2,
      editable: false,
      sortable: false,
      filterable: false,
      renderCell: (params: GridCellParams) => (
        <Link href={params?.value?.toString() || ""} style={{ margin: "auto" }}>
          <IconButton>
            <LinkIcon />
          </IconButton>
        </Link>
      ),
    },
  ];
  const handleToggleStatus = (
    id: number,
    status: "INPROGRESS" | "COMPLETED" | "REJECTED"
  ) => {
    if (status) {
      setHotdeals((prevHotdeals) =>
        prevHotdeals.map((hotdeal: Hotdeal) =>
          hotdeal.id === id ? { ...hotdeal, status: status } : hotdeal
        )
      );
    }
  };

  return (
    <Template>
      <Head>
        <title>위키 수정 - 핫딜위키</title>
      </Head>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography variant="h1" margin={"auto 0"}>
            아이폰14 Pro
          </Typography>
          <Box marginLeft="auto">
            <Button variant="contained" color="info" onClick={()=>setOpen(true)}>
              <AddIcon />
            </Button>
          </Box>
        </Box>
        <Box paddingTop={1}>
          <DataGrid
            rows={hotdeals}
            sx={{ m: 2 }}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            style={{ margin: 0 }}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end" gap={1} paddingTop={1}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<CancelIcon />}
            onClick={() => {}}
          >
            취소
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={() => {}}
          >
            저장
          </Button>
        </Box>
        <Dialog open={open} onClose={()=>setOpen(false)} >
          <DialogTitle>새로운 Hotdeal 생성</DialogTitle>
          <DialogContent>
            <TextField
              label="제목"
              value={formState.title}
              onChange={(e) => setFormState({...formState, title: e.target.value})}
              fullWidth
              autoFocus
              margin="dense"
            />
            <TextField
              label="가격"
              value={formState.price}
              type="number"
              onChange={(e) => setFormState({...formState, price: parseInt(e.target.value)})}
              autoFocus
              fullWidth
              margin="dense"
            />
            <TextField
              label="링크"
              value={formState.url}
              onChange={(e) => setFormState({...formState, url: e.target.value})}
              autoFocus
              fullWidth
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setOpen(false)}>취소</Button>
            <Button onClick={submitModal} variant="contained" color="primary">
              생성
            </Button>
          </DialogActions>
        </Dialog>
      </Article>
    </Template>
  );
}
