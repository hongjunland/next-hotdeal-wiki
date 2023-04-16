import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  width?: number;
  height?: number;
}

export default function Logo({ width = 80, height = 20, ...rest }: Props) {
  return (
    <div {...rest}>
      <Image src="/logo.svg" alt="logo" width={width} height={height} />
    </div>
  );
}
