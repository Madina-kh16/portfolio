import styled from "styled-components";

export const Desc = () => {
  return (
    <StyledMainWrap>
      <Text>Hi There</Text>
      <StyledPosit>
        <Name>
          I am Svetlana Dyablo<StyledPink></StyledPink>
        </Name>
      </StyledPosit>
      <MainTitle>
        A Web Developer. <StyledLine></StyledLine>
      </MainTitle>
    </StyledMainWrap>
  );
};

const StyledMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Text = styled.span`
  color: #ffffff;
  font-family: "Poppins Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

const StyledPosit = styled.div`
  position: relative;
  height: 50px;
  width: 456px;
  @media screen and (max-width: 860px) {
    max-width: 476px;
    z-index: 5;
    width: inherit;
  }
`;

const Name = styled.div`
  max-width: 569px;
  letter-spacing: 0.8px;
  color: #ffffff;
  font-family: "Josefin Sans Bold", sans-serif;
  font-size: 50px;
  background: transparent;
  line-height: 100%;
  position: absolute;
  z-index: 8;
  @media screen and (max-width: 860px) {
    position: inherit;
    font-size: 35px;
    line-height: 40px;
    letter-spacing: normal;
  }
  @media screen and (max-width: 360px) {
    font-size: 30px;
  }
`;

const StyledPink = styled.span`
  width: 426px;
  height: 20px;
  top: 39px;
  position: absolute;
  right: 3px;
  background-color: #7572d5;
  z-index: -1;
  @media screen and (max-width: 860px) {
    right: 0px;
    z-index: -1;
    top: 30px;
    width: 308px;
  }
  @media screen and (max-width: 360px) {
    width: 263px;
  }
`;

const MainTitle = styled.h2`
  color: #ffffff;
  font-family: "Poppins Regular";
  font-weight: 400;
  font-size: 27px;
  line-height: 40.5px;
  @media screen and (max-width: 860px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const StyledLine = styled.span`
  left: 5px;
  border-right: 1px solid #ffffff;
  position: relative;
`;
