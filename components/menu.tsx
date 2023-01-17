import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { NavLink } from "./typography";

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => p.theme.colors.neonGreenTransparent};
  backdrop-filter: blur(2px);
  border-radius: 16px;
  padding: 1rem 2rem;
  margin: 1rem;
  position: sticky;
  top: 1rem;
  z-index: 3;
  border: thin solid ${(p) => p.theme.colors.neonGreen};
`;

export default function Menu() {
  return (
    <nav>
      <Nav>
        <Link href="/">
          <li>
            <Image
              src="/images/realfr.ico"
              width={40}
              height={40}
              alt="realfr logo"
            />
          </li>
        </Link>
        <Link href="/notes">
          <NavLink>Notes</NavLink>
        </Link>
      </Nav>
    </nav>
  );
}
