import styled, { css } from "styled-components";

interface BProps {
  link?: boolean;
}

export const D1 = styled.h1`
  font-family: Zephyr;
  font-size: 4.209rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 768px) {
    font-size: 7.478rem;
  }
`;

export const D2 = styled.h2`
  font-family: Zephyr;
  font-size: 3.157rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 768px) {
    font-size: 5.61rem;
  }
`;

export const H1 = styled.h1`
  font-family: Zephyr;
  font-size: 2.369rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 768px) {
    font-size: 4.209rem;
  }
`;

export const H2 = styled.h2`
  font-family: Zephyr;
  font-size: 1.953rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 768px) {
    font-size: 3.157rem;
  }
`;
export const H3 = styled.h3`
  font-family: Zephyr;
  font-size: 1.563rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 768px) {
    font-size: 2.369rem;
  }
`;
export const H4 = styled.h4`
  font-family: Zephyr;
  font-size: 1.25rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  overflow-wrap: break-word;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 768px) {
    font-size: 1.777rem;
  }
`;
export const H5 = styled.h5`
  font-family: Zephyr;
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  overflow-wrap: break-word;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 768px) {
    font-size: 1.333rem;
  }
`;
export const H6 = styled.h6`
  font-family: Zephyr;
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  overflow-wrap: break-word;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.green};
  @media screen and (min-width: 768px) {
    font-size: 1.33rem;
  }
`;

export const B = styled.span<BProps>`
  font-family: Satoshi;
  font-weight: 500;
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: -0.01em;
  transition: all 0.3s ease;
  @media screen and (min-width: 768px) {
    font-size: 1.33rem;
  }
  ${(props) =>
    props.link &&
    css`
      &:hover {
        color: ${(p) => p.theme.colors.orange};
      }
      color: ${(p) => p.theme.colors.green};
      cursor: pointer;
    `};
`;
export const P1 = styled.p`
  font-family: Satoshi;
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: -0.01em;

  @media screen and (min-width: 768px) {
    font-size: 1.33rem;
  }
`;
export const P2 = styled.p`
  font-family: Satoshi;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 120%;
  letter-spacing: -0.01em;
  overflow: hidden;
  max-width: 75ch;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
export const C = styled.caption`
  font-family: Satoshi;
  font-weight: 400;
  font-size: 0.64rem;
  line-height: 120%;
  letter-spacing: -0.01em;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const L = styled.label`
  font-family: Satoshi;
  font-weight: 500;
  font-size: 0.64rem;
  line-height: 120%;
  letter-spacing: -0.01em;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;
