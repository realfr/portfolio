import Image from "next/image";
import styled from "styled-components";
import { B, H3, L, P2 } from "./typography";
import placeholder from "../public/images/placeholder.png";
import Achievements from "./achievements";
import Tags from "./tag";
import { Button } from "./button";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export interface IProject {
  title: string;
  description: string;
  tags: string[];
  achievements: string[];
}

export const Card = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  background: ${(p) => p.theme.colors.beige};
  border-radius: 16px;
  margin: 1rem;
  max-width: 90%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0.5rem;
    padding: 1rem;
    align-items: center;
    max-width: 100%;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  width: 100%;
  align-self: stretch;
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.5rem;
  width: 100%;
`;

export default function ProjectCard({ project }) {
  return (
    <Card>
      <CardDetails>
        <ProjectInfo>
          <H3>{project.title}</H3>
          <P2>{project.description}</P2>
          <Tags tags={project.tags} />
          <Achievements achievements={project.achievements} />
        </ProjectInfo>
        <Link href={`/projects/${project.id}`}>
          <Button type="button">
            <B>View</B>
            <AiOutlineArrowRight />
          </Button>
        </Link>
      </CardDetails>
    </Card>
  );
}
