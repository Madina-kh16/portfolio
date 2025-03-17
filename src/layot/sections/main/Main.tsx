import { myTheme } from "../../../components/styles/Theme.styled";

import { Desc } from "./desc/Desc";
import { Img } from "./img/Img";

import styled from "styled-components";

export const Main = () => {
  return (
    <StyledMain>
      <Wrapper>
        <Desc />
        <Img />
      </Wrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  margin: 270px 0;
  @media screen and (max-width: 950px) {
    padding: 0 15px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  ${myTheme.media.tablet} {
    flex-direction: column;
    gap: 58px;
    margin: 0 auto;
    max-width: 330px;
  }
`;
