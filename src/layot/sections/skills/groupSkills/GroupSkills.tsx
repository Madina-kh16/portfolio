import { Skill } from "./skill/Skill";

import styled from "styled-components";

export const GroupSkills = () => {
  return (
    <StyledGroupSkills>
      <StyledGroupSkillsWrapp>
        <Skill />
      </StyledGroupSkillsWrapp>
    </StyledGroupSkills>
  );
};

const StyledGroupSkills = styled.div`
  padding: 0 15px;
`;

const StyledGroupSkillsWrapp = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
