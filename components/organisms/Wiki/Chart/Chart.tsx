import React, { useRef, useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import Container from "@/components/atoms/Container";
export default function Chart() {
  // ECharts 차트 옵션 설정
  const option = {
    grid: {
      left: "0",
      right: "0",
      top: "20px",
      bottom: "20px",
      containLabel: true,
    },
    title: {
      //   text: "시세",
    },
    xAxis: {
      type: "category",
    //   axisLabel: {show: false}
      data: [
        "2023-05-09",
        "2023-05-10",
        "2023-05-11",
        "2023-05-12",
        "2023-05-25",
        "2023-05-28",
        "2023-06-11",
        "2023-06-12",
        "2023-06-20",
        "2023-06-22",
      ],
    },
    yAxis: {
      type: "value",
      min: 1000000,
      position: 'right',
    },
    series: [
      {
        name: "데이터",
        type: "line",
        data: [
          1350240, 1227980, 1295040, 1395120, 1202670, 1199560, 1243550,
          1311360, 1217890, 1296410,
        ],
        color: "rgba(245, 0, 87, 0.87)",
      },
    ],
  };
  return (
    <Container>
      <ReactECharts
        option={option}
        style={{ width: "100%", height: "467px" }}
      />
    </Container>
  );
}

