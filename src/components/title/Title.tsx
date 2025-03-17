import styled from "styled-components";

type TitlePropsType = {
  fontSize?: string;
};

export const Title = ({ text }) => {
  return (
    <StyledTitle>
      {text}
      <StyledLine></StyledLine>
    </StyledTitle>
  );
};

const StyledTitle = styled.h2<TitlePropsType>`
  color: white;
  text-align: center;
  font-family: "Josefin Sans Bold";
  font-size: ${(props) => props.fontSize || "36px"};
  line-height: 36px;
  letter-spacing: 5px;
  height: 67px;
  display: flex;
  margin: 0 auto 60px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 400px) {
    font-size: ${(props) => props.fontSize || "30px"};
    height: 55px;
    letter-spacing: 3px;
  }
`;

const StyledLine = styled.span`
  width: 55px;
  border-bottom: 1px solid #7572d5;
`;
