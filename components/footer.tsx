import Link from "next/link";
import styled from "styled-components";
import { flex } from "../styles/shared";
import { B } from "./typography";

export const FooterContainer = styled.footer`
  ${flex};
  padding: 0.5rem 2rem;
  margin: 1rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 3.75rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <B>© 2023 realfr</B>
    </FooterContainer>
  );
}
