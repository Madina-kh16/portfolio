import { Icon } from "../../../../components/icon/Icon";

import styled from "styled-components";

export const Data = () => {
  return (
    <StyledData>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit.
      </StyledText>
      <StyledLink href="">@IVAN IVANOV</StyledLink>
      <Icon
        width={"44"}
        height={"7"}
        viewBox={"0 0 44 7"}
        iconId={"pagination"}
      />
    </StyledData>
  );
};

const StyledData = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: white;
  text-align: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: Josefin Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  text-align: center;
  margin: 15px 0 35px;
`;
