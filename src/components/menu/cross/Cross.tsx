import { Icon } from "../../icon/Icon";

import styled from "styled-components";

export const Cross = ({ setIsOpen }) => {
  return (
    <StyledCross onClick={() => setIsOpen(false)}>
      <Icon iconId="cross" width="24" height="24" viewBox="0 0 24 24" />
    </StyledCross>
  );
};

const StyledCross = styled.div`
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 25px;
`;
