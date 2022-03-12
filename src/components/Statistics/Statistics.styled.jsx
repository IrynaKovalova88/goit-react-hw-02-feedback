import styled from "styled-components";

const StatisticsStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatisticsItemStyled = styled.li`
  font-size: 25px;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export { StatisticsStyled, StatisticsItemStyled };
