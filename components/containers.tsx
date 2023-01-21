import styled from "styled-components";
import { flex } from "../styles/shared";

const Container = styled.div`
  ${flex};
  padding: 0 0.5rem;
  flex-flow: column nowrap;
  overflow-wrap: break-word;
`;
const Main = styled.main`
  padding: 2.5rem 0;
  flex: 1;
  ${flex({ direction: "column" })};
  font-family: Satoshi;
  overflow-wrap: break-word;
`;

export { Container, Main };
