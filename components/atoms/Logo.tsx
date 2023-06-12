import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}
export default function Logo({ src, alt, ...props }: Props) {
  return <Atom src={src} alt={alt} width={32} height={32} {...props} />;
}

const Atom = styled(Image)`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
