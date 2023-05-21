import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Template } from "@/templates/Template";
import { Article } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Content } from "@/components/organisms/Article";

export default function Home() {
  return (
    <Template>
      <Head>
        <title>Hotdeal Wiki - 핫딜위키</title>
      </Head>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          display={"flex"}
          justifyContent={"space-between"}
        >
        </Box>
        <Content>
          Home
        </Content>
      </Article>
    </Template>
  );
}
