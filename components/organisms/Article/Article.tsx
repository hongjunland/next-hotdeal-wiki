import { Box, Typography, styled } from "@mui/material";
import { ReactNode } from "react";

interface ArticleProps{
  children: ReactNode;
};

const ArticleWrapper = styled('article')`
  font-size: 60px;
  margin-bottom: 200px;
  padding-top: 4rem;

  @media (width > 950px) {
    width: calc(100% - 300px);
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export default function Article({ children }: ArticleProps) {
  return (
    <ArticleWrapper>
      {children}
    </ArticleWrapper>
  );
}
