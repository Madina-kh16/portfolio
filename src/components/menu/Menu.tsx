import { Cross } from "./cross/Cross";

import styled from "styled-components";

export const Menu = ({ isOpen, setIsOpen }) => {
  const menuItem = [
    { text: "Home" },
    { text: "Skills" },
    { text: "Works" },
    { text: "Testimony" },
    { text: "Contact" }
  ];
  return (
    <Nav
      style={{
        display: isOpen ? "block" : "none"
      }}
    >
      <MenuItems>
        {menuItem.map(({ text }) => (
          <MenuItem>
            <StyledLink href="#">{text}</StyledLink>
          </MenuItem>
        ))}
      </MenuItems>
      <Cross setIsOpen={setIsOpen} />
    </Nav>
  );
};

const Nav = styled.nav`
  display: none;
  height: 100vh;
  padding-top: 300px;
  position: relative;
  z-index: 11;
  background-color: #2b2b2de5;
`;

const MenuItems = styled.ul`
  display: flex;
  max-width: 221px;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
`;

const MenuItem = styled.li`
  color: #7572d5;
  font-family: Josefin Sans;
  font-weight: 400;
  font-size: 50px;
  line-height: 55px;
  letter-spacing: 0%;
  text-align: center;
  list-style: none;

  &:hover {
    color: white;
  }
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
