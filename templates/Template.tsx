import Container from "@/components/atoms/Container";
import { Aside } from "@/components/organisms/Aside";
import { GlobalNav } from "@/components/organisms/GlobalNav";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}
export function Template({ children }: Props) {
  return (
    <Wrapper>
      <GlobalNav/>
      <Main>
        <StyledContainer>{children}</StyledContainer>
      </Main>
      <Aside />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  /* padding-top: 50px; */
  padding: 50px 5px 0 5px;
`;
