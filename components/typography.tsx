import styled from "styled-components";

export const D1 = styled.h1`
  font-family: Zephyr;
  font-size: 5.61rem;
  line-height: 120%;
  letter-spacing: 0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 568px) {
    font-size: calc(7.478rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 9.969rem;
  }
`;

export const D2 = styled.h2`
  font-family: Zephyr;
  font-size: 4.209rem;
  line-height: 120%;
  letter-spacing: 0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 568px) {
    font-size: calc(5.61rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 7.478rem;
  }
`;

export const H1 = styled.h1`
  font-family: Zephyr;
  font-size: 3.157rem;
  line-height: 120%;
  letter-spacing: 0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 568px) {
    font-size: calc(4.209rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 5.61rem;
  }
`;

export const H2 = styled.h2`
  font-family: Zephyr;
  font-size: 2.369rem;
  line-height: 120%;
  letter-spacing: 0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 568px) {
    font-size: calc(3.157rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 4.209rem;
  }
`;
export const H3 = styled.h3`
  font-family: Zephyr;
  font-size: 1.777rem;
  line-height: 120%;
  letter-spacing: 0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 568px) {
    font-size: calc(2.369rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 3.157rem;
  }
`;
export const H4 = styled.h4`
  font-family: Zephyr;
  font-size: 1.333rem;
  line-height: 120%;
  letter-spacing: 0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 568px) {
    font-size: calc(1.777rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 2.369rem;
  }
`;
export const H5 = styled.h5`
  font-family: Zephyr;
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: 0.03em;
  overflow-wrap: break-word;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 568px) {
    font-size: calc(1.333rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 1.777rem;
  }
`;
export const H6 = styled.h6`
  font-family: Zephyr;
  font-size: 0.75rem;
  line-height: 120%;
  letter-spacing: 0.03em;
  overflow-wrap: break-word;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 568px) {
    font-size: calc(1rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 1.333rem;
  }
`;

export const B = styled.span`
  font-family: Satoshi;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 120%;
  letter-spacing: 0.05em;
  @media screen and (min-width: 568px) {
    font-size: calc(1rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 1.333rem;
  }
`;
export const P1 = styled.p`
  font-family: Satoshi;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 120%;
  letter-spacing: 0.05em;
  @media screen and (min-width: 568px) {
    font-size: calc(1rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 1.333rem;
  }
`;
export const P2 = styled.p`
  font-family: Satoshi;
  font-weight: 400;
  font-size: 0.563rem;
  line-height: 120%;
  letter-spacing: 0.05em;
  @media screen and (min-width: 568px) {
    font-size: calc(0.75rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
export const C = styled.caption`
  font-family: Satoshi;
  font-weight: 400;
  font-size: 0.422rem;
  line-height: 120%;
  letter-spacing: 0.05em;
  @media screen and (min-width: 568px) {
    font-size: calc(0.563rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 0.75rem;
  }
`;
export const L = styled.label`
  font-family: Satoshi;
  font-weight: 400;
  font-size: 0.422rem;
  line-height: 120%;
  letter-spacing: 0.05em;
  @media screen and (min-width: 568px) {
    font-size: calc(0.422rem + 16 * ((100vw - 568px) / (768-568)));
  }
  @media screen and (min-width: 768px) {
    font-size: 0.563rem;
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
