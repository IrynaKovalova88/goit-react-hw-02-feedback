import React from "react";
import PropTypes from "prop-types";
import { SectionStyled } from "./SectionStyled";

export default function Section({ title, children }) {
  return (
    <div>
      <SectionStyled>{title}</SectionStyled>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
