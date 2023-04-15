// types/theme.ts

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      error: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    mediaQueries: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
