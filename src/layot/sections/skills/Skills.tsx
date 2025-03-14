import { Title } from "../../../components/title/Title";
import { GroupSkills } from "./groupSkills/GroupSkills";

import styled from "styled-components";

export const Skills = () => {
  return (
    <StyledSkills>
      <Title text={"My Skills"} />
      <GroupSkills />
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #252527;
  padding: 100px 0;
`;
