import { Cross } from "./cross/Cross";

import styled from "styled-components";

const menuItems = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Menu = ({  setIsOpen } : any) => {
  return (
    
    <Nav
    // style={{
    //   display: isOpen ? "block" : "none"
    // }}
    >
      
      <MenuItems>
        {menuItems.map((text, i) => (
          <MenuItem key={i}>
            <Link href="#">
              {text}
              <Mask>
                <span>{text}</span>
              </Mask>
              <Mask>
                <span>{text}</span>
              </Mask>
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
      <Cross setIsOpen={setIsOpen} />
    </Nav>
  );
};

const Nav = styled.nav`
  /* display: none; */
  margin: -79px -26px;
  height: 100vh;
  padding-top: 300px;
  position: relative;
  z-index: 11;
  background-color: #2b2b2de5;
`;

const MenuItems = styled.ul`
  display: flex;
  max-width: 226px;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
`;

const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 55px;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  display: inline-block;
  height: 50%;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  color: #7572d5;

  & + & {
    top: 50%;
    span {
      transform: translateY(-50%);
      display: inline-block;
    }
  }
`;
const MenuItem = styled.li`
  position: relative;
  text-align: center;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: #7572d5;

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: white;

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
