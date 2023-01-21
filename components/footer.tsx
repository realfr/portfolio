import Link from "next/link";
import styled from "styled-components";
import { flex } from "../styles/shared";
import { B } from "./typography";

export const FooterContainer = styled.footer`
  ${flex({ justify: "space-between" })};
  padding: 0.5rem 2rem;
  margin: 1rem;
  ul {
    ${flex({ gap: 0.5 })};
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <ul>
        <li>
          <Link href="https://github.com/realfr">
            <B link>Github</B>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/realfr_world">
            <B link>Twitter</B>
          </Link>
        </li>
      </ul>
      <B>© 2023 realfr</B>
    </FooterContainer>
  );
}
