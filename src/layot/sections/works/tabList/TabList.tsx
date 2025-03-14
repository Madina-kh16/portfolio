import styled from "styled-components";

export const TabList = () => {
  return (
    <StyledTabLists>
      <StyledTabListAll>
        All<StyledLine></StyledLine>
      </StyledTabListAll>
      <StyledTabList>LANDING PAGE</StyledTabList>
      <StyledTabList>REACT</StyledTabList>
      <StyledTabList>SPA</StyledTabList>
    </StyledTabLists>
  );
};

const StyledTabLists = styled.ul`
  max-width: 352px;
  margin: 0 auto;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTabListAll = styled.li`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: white;
  position: relative;
  left: 14px;
`;

const StyledTabList = styled.li`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  display: flex;
  line-height: 21px;
  color: white;
  height: 30px;
  align-items: center;
`;

const StyledLine = styled.div`
  position: absolute;
  top: 15px;
  left: -14px;
  width: 44px;
  border-bottom: 10px solid #7572d5;
`;
