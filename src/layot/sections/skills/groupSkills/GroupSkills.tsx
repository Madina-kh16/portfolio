import { Skill } from "./skill/Skill";

import styled from "styled-components";

export const GroupSkills = () => {
  return (
    <StyledGroupSkills>
      <StyledGroupSkillsWrap>
        <Skill />
      </StyledGroupSkillsWrap>
    </StyledGroupSkills>
  );
};

const StyledGroupSkills = styled.div`
  padding: 0 15px;
`;

const StyledGroupSkillsWrap = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
