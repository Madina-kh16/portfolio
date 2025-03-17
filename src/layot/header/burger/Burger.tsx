import { Icon } from "../../../components/icon/Icon";

import styled from "styled-components";

export const Burger = ({ setIsOpen }) => {
  const handleOpen = () => setIsOpen(true);

  return (
    <StyledBurger onClick={handleOpen}>
      <Icon
        iconId={"burger"}
        viewBox={"0 0 36 20"}
        width={"36"}
        height={"20"}
      />
    </StyledBurger>
  );
};

const StyledBurger = styled.div`
  cursor: pointer;
`;
