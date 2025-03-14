import { Icon } from "../../../../../components/icon/Icon";

import styled from "styled-components";

export const Skill = () => {
  const skill = [
    {
      id: 1,
      iconId: "code",
      name: "html5",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
      id: 2,
      iconId: "css",
      name: "css3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
      id: 3,
      iconId: "react",
      name: "React",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
      id: 4,
      iconId: "typescript",
      name: "typescript",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
      id: 5,
      iconId: "styled",
      name: "styled components",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
      id: 6,
      iconId: "figma",
      name: "WEB DESIgN  ",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }];
  return (
    <StyledGroupSkillsItems>
      {skill.map(({ id, iconId, name, text }) => {
        return (
          <StyledSkill key={id}>
            <StyledSkillCommon>
              <StyledSkillRomb></StyledSkillRomb>
              <Img>
                <Icon iconId={iconId} />
              </Img>
            </StyledSkillCommon>
            <SkillName>{name.toUpperCase()}</SkillName>
            <SkillDesc>{text}</SkillDesc>
          </StyledSkill>
        );
      })}
    </StyledGroupSkillsItems>
  );
};

const StyledGroupSkillsItems = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledSkill = styled.div`
  max-width: 340px;
  height: 338px;
  padding-top: 45px;
`;

const StyledSkillCommon = styled.div`
  position: relative;
  width: 80px;
  margin: 0 auto;
`;

const StyledSkillRomb = styled.div`
  max-width: 80px;
  height: 80px;
  background-color: #ffffff1a;
  transform: rotate(45deg);
`;

const Img = styled.div`
  max-width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const SkillName = styled.div`
  font-family: "Josefin Sans Bold";
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: white;
  margin: 50px auto 15px;
  text-align: center;
`;

const SkillDesc = styled.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0%;
  text-align: center;
  color: white;
`;
