import styled from "styled-components";

export const D1 = styled.h1`
  font-family: Clash Display;
  font-weight: 600;
  font-size: 2.21rem;
  line-height: 120%;
  letter-spacing: 0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 568px) {
    font-size: calc(3.21rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 4.21rem;
  }
`;

export const NavLink = styled.li`
  font-family: Satoshi;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  color: ${(p) => p.theme.colors.green};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  padding: 1rem 0;
  ::hover,
  ::active,
  ::focus {
    background-color: ${(p) => p.theme.colors.white};
    border-radius: 16px;
    color: ${(p) => p.theme.colors.black};
  }
`;
