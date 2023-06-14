import styled from "@emotion/styled";
import Image from "next/image";
interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
export default function Figure({ src, alt, width, height }: Props){
  return (
    <Molecule>
      <Image src={src} alt={alt} width={width} height={height} />
    </Molecule>
  );
}
Figure.defaultProps = {
  width: 340,
  height: 340,
};
const Molecule = styled.figure`
  display: flex;
  width: fit-content;
  align-items: center;
  margin: 0;
`;
