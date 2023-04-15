import { Html, Head, Main, NextScript } from "next/document";
/*
HTML의 전역 문서를 정의합니다.
페이지별로 공통으로 사용되는 메타 태그, 스타일시트, 스크립트 태그 등을 추가할 수 있습니다.
서버 사이드 렌더링 시에만 실행됩니다.
*/
export default function Document() {
  return (
    <Html lang="en">
      document start
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      document end
    </Html>
  );
}
