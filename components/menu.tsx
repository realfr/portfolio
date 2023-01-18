import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineCopy } from "react-icons/ai";
import { NavLink } from "./typography";
import { copy } from "../utils";

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
  box-shadow: 0 10px 10px -10px rgb(0 0 0 /5%);
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

        <NavLink onClick={copy}>
          <AiOutlineCopy />
          Email
        </NavLink>
      </Nav>
    </nav>
  );
}
