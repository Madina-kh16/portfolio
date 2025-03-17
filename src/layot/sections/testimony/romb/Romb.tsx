import { Icon } from "../../../../components/icon/Icon";

import styled from "styled-components";

export const Romb = () => {
  return (
    <StyledRomb>
      <StyledRombBack></StyledRombBack>
      <Img>
        <Icon iconId={"commas"} />
      </Img>
    </StyledRomb>
  );
};

const StyledRomb = styled.div`
  position: relative;
  width: 80px;
  margin: 0 auto 50px;
  @media screen and (max-width: 768px) {
    margin: 60px auto 50px;
  }
`;

const StyledRombBack = styled.div`
  max-width: 80px;
  height: 80px;
  background-color: #ffffff1a;
  transform: rotate(45deg);
`;

const Img = styled.div`
  max-width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
  left: 15px;
`;
