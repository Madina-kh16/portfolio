import { Icon } from "../../components/icon/Icon";
import { Networks } from "./networks/Networks";

import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <Name>Svetlana</Name>
        <Networks />
        <Link href="">© 2023 Svetlana Dyablo, All Rights Reserved.</Link>
        <Arrow>
          <Icon
            width={"16"}
            height={"15"}
            viewBox={"0 0 16 15"}
            iconId="arrow"
          />
        </Arrow>
      </StyledWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 15px;
`;

const StyledWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
`;

const Name = styled.div`
  font-family: Josefin Sans;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: 3px;
  color: white;
  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

const Link = styled.a`
  color: #495057;
  text-decoration: none;
  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

const Arrow = styled.div`
  cursor: pointer;
  text-align: center;
  padding-top: 6px;
  width: 30px;
  height: 30px;
  background-color: #0000004d;
  position: absolute;
  right: 30px;
`;
