import styled from "styled-components";

export const TabList = () => {
  const lists = [
    { text: "All" },
    { text: "LANDING PAGE" },
    { text: "REACT" },
    { text: "SPA" }
  ];

  return (
    <StyledTabLists>
      {lists.map(({ text }) => (
        <StyledItem>
          <a href="#">{text}</a>
          <StyledLine></StyledLine>
        </StyledItem>
      ))}
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

const StyledItem = styled.li`
  font-family: "Poppins Regular";
  font-size: 14px;
  line-height: 21px;
  color: white;
  position: relative;
  left: 14px;

  &:hover {
    :last-child {
      display: block;
    }
  }
`;

const StyledLine = styled.span`
  display: none;
  position: absolute;
  top: 15px;
  width: 100%;
  border-bottom: 10px solid #7572d5;
`;
