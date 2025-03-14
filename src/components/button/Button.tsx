import styled from "styled-components";

export const Button = ({ text }) => {
  return (
    <StyledButton>
      {text}
      <StyledLine></StyledLine>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;
  max-width: 170px;
  height: 32px;
  margin: 15px auto;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1px;
  color: white;
`;

const StyledLine = styled.div`
  width: 77px;
  position: absolute;
  border-bottom: 10px solid #7572d5;
  bottom: 6px;
  left: 46px;
`;
