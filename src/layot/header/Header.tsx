import { useState } from "react";
import { Logo } from "../../components/logo/Logo";
import { Burger } from "./burger/Burger";
import { Menu } from "../../components/menu/Menu";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

import styled from "styled-components";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <StyledHeader>
      <StyledWrapper>
        <Logo />
        <HeaderMenu />
        <Burger setIsOpen={setIsOpen} />
      </StyledWrapper>
      <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: #1f1f20;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 30px;
  @media screen and (max-width: 1510px) {
    padding: 0 26px;
  }
`;

const StyledWrapper = styled.div`
  max-width: 1240px;
  margin: 12px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const HeaderMenu = styled.${HeaderMenu}`
//   @media screen and (max-width: 1510px) {
//     padding: 0 15px;
//   }
// `;
