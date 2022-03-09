import styled from "styled-components";

const FeedbackListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 16px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
  width: 140px;
  :hover {
    color: #fff;
    background: #2a50f5;
    font-weight: bold;
  }
`;

export { FeedbackListStyled, ButtonStyled };
