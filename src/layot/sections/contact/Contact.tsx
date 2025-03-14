import { Button } from "../../../components/button/Button";
import { Title } from "../../../components/title/Title";
import { Fields } from "./fields/Fields";

import styled from "styled-components";

export const Contact = () => {
  return (
    <StyledContact>
      <Wrapper>
        <Title text={"Contact"} />
        <Fields />
        <Button text={"SEND MESSAGE"} />
      </Wrapper>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  padding: 100px 15px;
`;

const Wrapper = styled.div`
  max-width: 540px;
  margin: 0 auto;
`;
