import proj1 from "../../../../assets/images/proj1.png";
import proj2 from "../../../../assets/images/proj2.png";
import proj1copy from "../../../../assets/images/proj1copy.png";

import styled from "styled-components";

export const Cards = () => {
  const card = [
    {
      id: 1,
      img: window.innerWidth < 480 ? proj1copy : proj1,
      btn: window.innerWidth < 480 ? "VIEW PROJECT" : false,
      name: "Social Network",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      id: 2,
      img: proj2,
      name: "Timer",
      btn: "VIEW PROJECT",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim"
    }
  ];

  return (
    <StyledCards>
      {card.map(({ id, img, name, text, btn }) => {
        return (
          <StyledCard key={id}>
            <StyledCardCommon>
              <StyledPhoto src={img} alt="" />
              <StyledBtn style={{ display: btn ? "block" : "none" }}>
                {btn}
              </StyledBtn>
            </StyledCardCommon>
            <StyledDesc>
              <StyledSubtitle>{name}</StyledSubtitle>
              <StyledText>{text}</StyledText>
              <StyledLinks>
                <StyledLinkDemo>
                  Demo<StyledLine></StyledLine>
                </StyledLinkDemo>
                <StyledLink>Code</StyledLink>
              </StyledLinks>
            </StyledDesc>
          </StyledCard>
        );
      })}
    </StyledCards>
  );
};

const StyledCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const StyledCard = styled.div`
  width: 540px;
  height: auto;
  background-color: #252527;
  @media (max-width: 480px) {
    width: inherit;
    max-width: 540px;
  }
`;

const StyledCardCommon = styled.div`
  max-width: 540px;
  display: flex;
  justify-content: center;
`;

const StyledPhoto = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  @media (max-width: 830px) {
    object-fit: inherit;
  }
`;

const StyledBtn = styled.div`
  margin-top: 114px;
  position: absolute;
  width: 170px;
  height: 32px;
  color: white;
  text-align: center;
  padding: 7px 0;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  background-color: #7572d5;
`;

const StyledDesc = styled.div`
  display: flex;
  padding: 0 20px 20px;
  flex-direction: column;
  margin-top: 25px;
  gap: 15px;
`;

const StyledSubtitle = styled.h2`
  font-family: Josefin Sans;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  color: white;
`;

const StyledText = styled.p`
  color: white;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0%;
`;

const StyledLinks = styled.div`
  max-width: 108px;
  display: flex;
  gap: 20px;
`;

const StyledLinkDemo = styled.div`
  color: white;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1px;
  position: relative;
  z-index: 4;
`;

const StyledLink = styled.div`
  color: white;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1px;
`;

const StyledLine = styled.div`
  border-bottom: 10px solid #7572d5;
  width: 44px;
  position: absolute;
  top: 14px;
  z-index: -1;
`;
