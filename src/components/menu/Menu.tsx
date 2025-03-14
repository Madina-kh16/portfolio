import { Cross } from "./cross/Cross";

import styled from "styled-components";

export const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <StyledMenu
      style={{
        display: isOpen ? "block" : "none"
      }}
    >
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Works</a>
        </li>
        <li>
          <a href="">Testimony</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <Cross setIsOpen={setIsOpen} />
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: none;
  height: 100vh;
  padding-top: 300px;
  position: relative;
  z-index: 11;
  background-color: #2b2b2de5;
  ul {
    display: flex;
    max-width: 221px;
    flex-direction: column;
    gap: 30px;
    margin: 0 auto;
  }
  li {
    color: #7572d5;
    font-family: Josefin Sans;
    font-weight: 400;
    font-size: 50px;
    line-height: 55px;
    letter-spacing: 0%;
    text-align: center;
    list-style: none;
  }

  li:hover {
    color: white;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
