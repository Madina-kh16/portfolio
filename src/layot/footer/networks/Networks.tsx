import { Icon } from "../../../components/icon/Icon";

import styled from "styled-components";

export const Networks = () => {
  return (
    <StyledNetworks>
      <Icon iconId={"inst"} width="35" height="35" viewBox="0 0 35 35" />
      <Icon iconId={"tg"} width="35" height="35" viewBox="0 0 35 35" />
      <Icon iconId={"vk"} width="35" height="35" viewBox="0 0 35 35" />
      <Icon iconId={"in"} width="35" height="35" viewBox="0 0 35 35" />
    </StyledNetworks>
  );
};

const StyledNetworks = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 26px auto 30px;
`;
