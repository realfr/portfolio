import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { flex } from "../styles/shared";
import { B } from "./typography";

const NavContainer = styled.div`
  ${flex({ justify: "center" })};
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 3;
  @media screen and (max-width: 568px) {
    bottom: 0;
  }
  @media screen and (max-width: 768px) {
    bottom: 0;
  }
  @media screen and (min-width: 769px) {
    top: 0;
  }
`;

export const Nav = styled.nav`
  ${flex({ justify: "space-between" })};
  background: ${(p) => p.theme.colors.neonGreenTransparent};
  backdrop-filter: blur(24px);
  border-radius: 16px;
  padding: 1rem 2rem;
  margin: 0.5rem;
  width: 80%;
  border: thin solid ${(p) => p.theme.colors.neonGreen};
  box-shadow: 0 10px 10px -10px rgb(0 0 0 /5%);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavLinks = styled.ul`
  ${flex({ justify: "flex-end", align: "center", gap: 1 })}
`;

export default function Menu() {
  return (
    <NavContainer>
      <Nav>
        <Link href="/">
          <Image
            src="/images/realfr.ico"
            width={24}
            height={24}
            alt="realfr logo"
          />
        </Link>
        <NavLinks>
          <li>
            <Link href="/notes">
              <B link>Notes</B>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/realfr_world">
              <B link>Twitter</B>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/realfr">
              <B link>Github</B>
            </Link>
          </li>
        </NavLinks>
      </Nav>
    </NavContainer>
  );
}
