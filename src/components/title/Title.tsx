import styled from "styled-components";

export const Title = ({ text }) => {
  return (
    <StyledTitle>
      {text}
      <StyledLine></StyledLine>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  color: white;
  text-align: center;
  font-family: "Josefin Sans";
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 5px;
  height: 67px;
  display: flex;
  margin: 0 auto 60px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
  @media (max-width: 360px) {
    font-size: 30px;
    height: 55px;
    letter-spacing: 3px;
  }
`;

const StyledLine = styled.div`
  width: 55px;
  border-bottom: 1px solid #7572d5;
`;
