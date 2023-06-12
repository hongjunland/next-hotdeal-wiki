import Container from "@/components/atoms/Container";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}
export function Template({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
