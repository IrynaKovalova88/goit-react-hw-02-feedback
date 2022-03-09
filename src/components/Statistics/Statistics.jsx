import React from "react";
import PropTypes from "prop-types";
import {
  StatisticsStyled,
  StatisticsItemStyled,
} from "../Statistics/StatisticsStyled";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsStyled>
      <StatisticsItemStyled>Good: {good}</StatisticsItemStyled>
      <StatisticsItemStyled>Neutral: {neutral}</StatisticsItemStyled>
      <StatisticsItemStyled>Bad: {bad}</StatisticsItemStyled>
      <StatisticsItemStyled>Total: {total}</StatisticsItemStyled>
      <StatisticsItemStyled>
        Positive Percentage: {positivePercentage}%
      </StatisticsItemStyled>
    </StatisticsStyled>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
