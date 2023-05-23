import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { Hotdeal } from "@/types/Hotdeal/wiki";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
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
import { ChangeEvent, useState } from "react";
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
const columns: GridColDef[] = [
  {
    field: "createdAt",
    headerName: "작성일",
    width: 150,
    editable: false,
    type: "datetime",
    headerAlign: "left",
  },
  {
    field: "title",
    headerName: "제목",
    width: 400,
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
    width: 150,
    editable: false,
    headerAlign: "right",
  },
  {
    field: "url",
    headerName: "",
    type: "string",
    width: 100,
    editable: false,
    sortable: false,
    renderCell: (params: GridCellParams) => (
      <Link href={params?.value?.toString() || ""} style={{ margin: "auto" }}>
        <IconButton>
          <LinkIcon />
        </IconButton>
      </Link>
    ),
  },
];

interface FormState {
  title: string;
  price: number;
  url: string;
}
export default function WikiPage() {
  const [hotdeals, setHotdeals] = useState<Hotdeal[]>(hotdealsData);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [hotdealInfo, setHotdealInfo] = useState<Hotdeal>({
    id: 0,
    title: "",
    createdAt: "",
    price: 0,
    url: "",
    status: "INPROGRESS",
  });

  const handleChangeInfo = (params: GridCellParams, e: any) => {
    if (params.field === "__check__" || params.field === "url") return;
    const hotdealInfo = params.row as Hotdeal;
    setHotdealInfo(hotdealInfo);
    setOpenInfoModal(true);
  };
  
  const options = {
    xAxis: {
      type: "category",
      data: hotdeals
        .filter((hotdeal: Hotdeal) => hotdeal.status === "COMPLETED")
        .map((hotdeal: Hotdeal) => hotdeal.createdAt.slice(0, 10)),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Data",
        type: "line",
        data: hotdeals
          .filter((hotdeal: Hotdeal) => hotdeal.status === "COMPLETED")
          .map((hotdeal: Hotdeal) => hotdeal.price),
      },
    ],
  };
  return (
    <Template>
      <Head>
        <title>아이폰14 Pro - 핫딜위키</title>
      </Head>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography variant="h1" margin={"auto 0"}>아이폰14 Pro</Typography>
          <Box marginLeft="auto">
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={()=>{}}
            >
              수정
            </Button>
          </Box>
        </Box>
        <div>
          <ReactECharts option={options} />
          <DataGrid
            rows={hotdeals}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            onCellClick={(params, e) => handleChangeInfo(params, e)}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
          <Dialog open={openInfoModal} onClose={() => setOpenInfoModal(false)}>
            <DialogTitle variant="h2">
              핫딜 정보
              <Link href={hotdealInfo.url}>
                <IconButton>
                  <LinkIcon />
                </IconButton>
              </Link>
            </DialogTitle>

            <DialogContent>
              <Box>
                <Typography variant="body1">
                  제목 : {hotdealInfo?.title}
                </Typography>
                <Typography variant="body1">
                  가격 : {hotdealInfo?.price}
                </Typography>
                <Typography variant="body1">
                  작성일 : {hotdealInfo?.createdAt}
                </Typography>
              </Box>
            </DialogContent>
          </Dialog>
        </div>
      </Article>
    </Template>
  );
}
