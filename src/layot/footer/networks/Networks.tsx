import { Icon } from "../../../components/icon/Icon";

import styled from "styled-components";

const networks = [
  { iconId: "inst" },
  { iconId: "tg" },
  { iconId: "vk" },
  { iconId: "in" }
];

export const Networks = () => {
  return (
    <StyledNetworks>
      {networks.map(({ iconId }) => (
        <StyledItem>
          <StyledLink href="#">
            <Icon iconId={iconId} width="21" height="21" viewBox="0 0 21 21" />
          </StyledLink>
        </StyledItem>
      ))}
    </StyledNetworks>
  );
};

const StyledNetworks = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 26px auto 30px;
`;

const StyledItem = styled.div`
  width: 35px;
  height: 35px;
  background-color: #ffffff1a;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #7572d5;
    transform: translateY(-4px);

    a {
      color: #000000;
    }
  }
`;

const StyledLink = styled.a`
  color: #7572d5;
  width: 21px;
  height: 21px;
`;
