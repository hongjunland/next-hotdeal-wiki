import "@/styles/globals.css";
import "@/styles/main.css";
import type { AppProps } from "next/app";
import { Theme, ThemeProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalNav } from "@/components/organisms/GlobalNav";
import { Aside } from "@/components/organisms/Aside";
import styled from "@emotion/styled";
/*
페이지가 렌더링되기 전에 실행되며, 전역 레이아웃이나 컴포넌트를 정의합니다.
전역 상태나 로깅 처리 등도 여기에서 처리할 수 있습니다.
각 페이지별로 정의된 getInitialProps 함수보다 먼저 실행됩니다.
*/
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <ThemeProvider theme={theme}>
              <GlobalNav />
              <Wrapper>
                <Main>
                  <Component {...pageProps} />
                </Main>
                <Aside />
              </Wrapper>
            </ThemeProvider>
          </RecoilRoot>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;
const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  /* padding-top: 50px; */
  padding: 50px 5px 0 5px;
`;
