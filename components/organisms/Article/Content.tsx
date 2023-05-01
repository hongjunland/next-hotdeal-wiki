import { styled } from "@mui/material";

const StyledSection = styled("div")`
  width: 100%;
  word-wrap: break-word;
`;
interface Props {
  children?: React.ReactNode;
}
export default function Content({ children }: Props) {
  return <StyledSection>{children}</StyledSection>;
}
