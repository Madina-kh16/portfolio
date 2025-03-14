import { Title } from "../../../components/title/Title";
import { Data } from "./data/Data";
import { Romb } from "./romb/Romb";

import styled from "styled-components";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <StyledWrapper>
        <Title text={"Testimony"} />
        <Romb />
        <Data />
      </StyledWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #252527;
  padding: 100px 15px 85px;
`;

const StyledWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
