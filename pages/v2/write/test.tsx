import Article from "@/components/organisms/Article";
import { Template } from "@/templates/Template";
import { Hotdeal } from "@/types/Hotdeal/wiki";
import { AddCircle, ArrowBack } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import {
  GridCallbackDetails,
  GridCellParams,
  GridColDef,
} from "@mui/x-data-grid";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const hotdealsData: Hotdeal[] = [
  {
    id: 1,
    title: "아이폰14 Pro",
    createdAt: "2023-05-11",
    price: 1426000,
    url: "https://www.coupang.com/vp/products/6790570071?itemId=15997175967&vendorItemId=83202422299&src=1139000&spec=10799999&addtag=460&ctag=6790570071&lptag=AF4133438&itime=20230522195017&pageType=MLSDP&pageValue=6790570071&wPcid=16830361537623983334454&wRef=www.fmkorea.com&wTime=20230522195017&redirect=landing&traceid=V0-183-abc0fa9ef220d511&mcid=2432c483271d4e8d97a098f33da783fe&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&pageid=&deviceid=&token=&contenttype=&subid=AF4133438&impressionid=&campaigntype=&requestid=&contentkeyword=&subparam=904700413&isAddedCart=",
    status: "COMPLETED",
  },
];
const columns: GridColDef[] = [
  {
    field: "createdAt",
    headerName: "작성일",
    width: 150,
    editable: false,
  },
  {
    field: "title",
    headerName: "제목",
    width: 400,
    editable: false,
  },
  {
    field: "price",
    headerName: "가격 (원)",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "url",
    headerName: "",
    type: "string",
    width: 100,
    editable: false,
    sortable: false,
    renderCell: (params: GridCellParams) => (
      <Link
        href={params?.value?.toString() || ""}
        style={{ textAlign: "center" }}
      >
        [링크]
      </Link>
    ),
  },
];
interface FormState {
  title: string;
  price: number;
  url: string;
}
export default function WritePage() {
  const [hotdeals, setHotdeals] = useState<Hotdeal[]>(hotdealsData);
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    title: "",
    price: 0,
    url: "",
  });
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

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
  const rejectRows = () => {
    console.log(selectedRows);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleSelectionChange = (
    rows: number[],
    selection: GridCallbackDetails
  ) => {
    setSelectedRows(rows);
  };
  return (
    <Template>
      <Head>
        <title>글작성 - 핫딜위키</title>
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
              startIcon={<ArrowBack />}
              onClick={rejectRows}
            >
              취소
            </Button>
            <Button
              variant="contained"
              startIcon={<AddCircle />}
              onClick={handleClickOpen}
              style={{ marginLeft: "10px" }}
            >
              작성
            </Button>
          </Box>
        </Box>
        <div></div>
      </Article>
    </Template>
  );
}
