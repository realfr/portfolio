import styled from "styled-components";
import { flex } from "../styles/shared";
import { AiOutlineCheck } from "react-icons/ai";
import { P2 } from "./typography";

interface IAchievements {
  achievements: string[];
}

export const AchievementList = styled.ul`
  ${flex({ direction: "column", align: "flex-start", gap: 1 })};
`;

export const AchievementSet = styled.li`
  ${flex({ gap: 0.5 })};
`;

export const Icon = styled.span`
  ${flex};
  width: 32px;
  height: 32px;
  background: ${(p) => p.theme.colors.orange};
  border-radius: 50px;
  @media screen and (max-width: 768px) {
    path {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
`;

const AchievementText = styled(P2)`
  overflow: hidden;
  max-width: 75ch;
`;

export default function Achievements({ achievements }: IAchievements) {
  return (
    <AchievementList>
      {achievements.map((a) => {
        return (
          <AchievementSet key={a}>
            <Icon>
              <AiOutlineCheck />
            </Icon>
            <AchievementText>{a}</AchievementText>
          </AchievementSet>
        );
      })}
    </AchievementList>
  );
}
