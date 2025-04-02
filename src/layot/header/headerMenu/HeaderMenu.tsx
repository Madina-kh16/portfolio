import styled from "styled-components";

const menuItems = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const HeaderMenu = () => {
  return (
    <Nav>
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
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  @media screen and (max-width: 1140px) {
    display: none;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  max-width: 715px;
  gap: 30px;
`;

const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  line-height: 55px;
  color: transparent;
  font-size: 30px;
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
