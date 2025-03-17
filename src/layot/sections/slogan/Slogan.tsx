import { Button } from "../../../components/button/Button";
import { Title } from "../../../components/title/Title";

import styled from "styled-components";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <StyledWrapper>
        <Title text={"I Am Available For Freelance"} />
        <Button text={"HIRE ME"} />
      </StyledWrapper>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  padding: 100px 15px;
  background-color: #252527;
`;

const StyledWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
