import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  padding: 1rem 2rem;
  gap: 0.25rem;
  font-family: Satoshi;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  color: ${(p) => p.theme.colors.green};
  background: ${(p) => p.theme.colors.neonGreenTransparent};
  border-radius: 16px;
  ::hover,
  ::active,
  ::focus {
    background: ${(p) => p.theme.colors.neonGreen};
    border: thin solid ${(p) => p.theme.colors.white};
  }
`;
