import { Logo } from "../../components/logo/Logo";
import { Burger } from "./burger/Burger";

import styled from "styled-components";

export const Header = ({ setIsOpen }) => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <Logo />
        <Burger setIsOpen={setIsOpen} />
      </StyledWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  background-color: #1f1f20;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 30px;
  @media screen and (max-width: 1510px) {
    padding: 0 15px;
  }
`;

const StyledWrapper = styled.div`
  margin: 13px auto;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
