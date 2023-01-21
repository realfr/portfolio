import styled from "styled-components";
import { flex } from "../styles/shared";
import { L } from "./typography";

interface ITags {
  tags: string[];
}

const Tag = styled.li`
  ${flex};
  padding: 0.24rem 0.5rem;
  gap: 0.5rem;
  border-radius: 16px;
  background: ${(p) => p.theme.colors.brown};
  color: ${(p) => p.theme.colors.black};
`;

const TagGroup = styled.ul`
  ${flex({ align: "flex-start", justify: "flex-start" })};
  gap: 0.5rem 1rem;
  flex-wrap: wrap;
`;

const Tags = ({ tags }) => {
  return (
    <TagGroup>
      {tags?.map((t) => (
        <Tag key={t}>
          <L>{t}</L>
        </Tag>
      ))}
    </TagGroup>
  );
};

export default Tags;
