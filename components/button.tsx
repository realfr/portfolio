import styled from "styled-components";
import { flex } from "../styles/shared";

export const Button = styled.button`
  ${flex({ gap: 0.25 })};
  padding: 1rem 2rem;
  font-family: Satoshi;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  color: ${(p) => p.theme.colors.black};
  background: ${(p) => p.theme.colors.yellow};
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    background: ${(p) => p.theme.colors.orange};
  }
`;
