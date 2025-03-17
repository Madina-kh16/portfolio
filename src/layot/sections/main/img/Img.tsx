import { myTheme } from "../../../../components/styles/Theme.styled";

import photo from "../../../../assets/images/photo.png";

import styled from "styled-components";

export const Img = () => {
  return (
    <StyledImg>
      <Photo src={photo} alt="girl" />
      <StyledBorder></StyledBorder>
    </StyledImg>
  );
};

const StyledImg = styled.div`
  position: relative;
  left: -12px;
`;

const StyledBorder = styled.span`
  height: 470px;
  bottom: -16px;
  left: 34px;
  width: 360px;
  position: absolute;
  background-color: transparent;
  border: 5px solid #7572d5;
  @media screen and (max-width: 1120px) {
    width: 314px;
    height: 414px;
    bottom: -14px;
    left: 21px;
  }

  ${myTheme.media.middle} {
    width: 280px;
    height: 380px;
  }
`;

const Photo = styled.img`
  max-width: 100%;
  width: 350px;
  height: 430px;
  position: relative;
  object-fit: cover;
  z-index: 5;
  @media screen and (max-width: 1120px) {
    width: 310px;
    height: 380px;
  }

  ${myTheme.media.middle} {
    width: 280px;
    height: 340px;
  }
`;
