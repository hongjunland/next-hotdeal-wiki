import styled from "@emotion/styled";
// import { Container as MuiContainer } from "@mui/material";
interface Props {
  children?: React.ReactNode;
  fluid?: boolean;
  className?: string;
}
export default function Container({ children, fluid, ...props }: Props) {
  return <Atom {...props} fluid={fluid}>{children}</Atom>;
}

Container.defaultProps = {};

const Atom = styled.div<Props>`
  max-width: ${props=> props.fluid ? '100%' : "900px"};
  width: 100%;
  height: 100%;
  margin: auto;
`;
