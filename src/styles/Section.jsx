import React from "react";
import styled from "styled-components";

const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

const SectionStyled = styled.section`
  padding: 0 15%;
  margin-bottom: 50px;
`;

export default Section;
