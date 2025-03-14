import { Title } from "../../../components/title/Title";
import { TabList } from "./tabList/TabList";
import { Cards } from "./cards/Cards";

import styled from "styled-components";

export const Works = () => {
  return (
    <StyledWorks>
      <StyledWrapper>
        <Title text={"My Works"} />
        <TabList />
        <Cards />
      </StyledWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  padding: 100px 15px 128px;
`;

const StyledWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
