import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  theme: Theme;
}

export default function GlobalNav({theme}: Props) {
  return <Container theme={theme}>GlobalNav</Container>;
}

const Container = styled.div<Props>`
  background-color: ${(props) => props.theme.colors.primary};
`;