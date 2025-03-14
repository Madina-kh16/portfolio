import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";

import photo from "../../../assets/images/photo.png";

import styled from "styled-components";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <StyledMainWrap>
          <Text>Hi There</Text>
          <StyledPosit>
            <Name>I am Svetlana Dyablo</Name>
            <StyledPink></StyledPink>
          </StyledPosit>
          <MainTitle>
            A Web Developer. <StyledLine></StyledLine>
          </MainTitle>
        </StyledMainWrap>
        <StyledImg>
          <Photo src={photo} alt="" />
          <StyledBorder></StyledBorder>
        </StyledImg>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  margin: 270px 0;
  @media (max-width: 950px) {
    padding: 0 15px;
  }
`;

const StyledMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Text = styled.span`
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  @media (max-width: 920px) {
  }
`;

const StyledPosit = styled.div`
  position: relative;
  height: 50px;
  width: 480px;
  @media (max-width: 950px) {
    max-width: 476px;
    z-index: 5;
    width: inherit;
  }
  @media (max-width: 920px) {
    max-width: 308px;
  }
`;

const Name = styled.h2`
  max-width: 569px;
  color: #ffffff;
  font-family: "Josefin Sans Bold";
  font-weight: 700;
  font-size: 50px;
  background: transparent;
  line-height: 50px;
  position: absolute;
  z-index: 8;
  word-spacing: 12px;
  @media (max-width: 950px) {
    position: inherit;
    word-spacing: normal;
    font-size: 35px;
    line-height: 40px;
  }
`;

const StyledPink = styled.div`
  width: 426px;
  height: 20px;
  top: 39px;
  position: absolute;
  right: 3px;
  background-color: #7572d5;
  @media (max-width: 950px) {
    right: 0px;
    z-index: -1;
  }
  @media (max-width: 920px) {
    width: 308px;
    top: 30px;
  }
`;

const MainTitle = styled.h1`
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 27px;
  line-height: 40.5px;
  letter-spacing: 0%;
  @media (max-width: 920px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const StyledLine = styled.span`
  left: 5px;
  border-right: 1px solid #ffffff;
  position: relative;
`;

const StyledImg = styled.div`
  position: relative;
`;

const StyledBorder = styled.div`
  width: 360px;
  height: 470px;
  bottom: -16px;
  left: 34px;
  border-width: 5px;
  position: absolute;
  background-color: transparent;
  border: 5px solid #7572d5;
  @media (max-width: 1120px) {
    width: 314px;
    height: 414px;
    bottom: -14px;
    left: 21px;
  }
`;

const Photo = styled.img`
  max-width: 100%;
  width: 350px;
  height: 430px;
  position: relative;
  object-fit: cover;
  z-index: 5;
  @media (max-width: 1120px) {
    width: 310px;
    height: 380px;
  }
`;
