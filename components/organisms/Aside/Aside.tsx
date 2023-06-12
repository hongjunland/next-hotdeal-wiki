import styled from "@emotion/styled";

export default function Aside() {
  return (
    <StyledAside>
      <ul>
        <li>dsds</li>
        <li>dsds</li>
        <li>dsds</li>
        <li>dsds</li>
        <li>dsds</li>
        <li>dsds</li>
      </ul>
    </StyledAside>
  );
}
const StyledAside = styled.aside`
  width: 300px;
  /* border-left: 1px black solid; */
  @media (max-width: 1200px) {
    display: none;
  }
`;
