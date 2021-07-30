import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <HeaderStyled>
      <TitleHeader>InfoCovid-19</TitleHeader>
      <Navbar />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282d36;
  box-shadow: 0 2px 5px black;
  box-sizing: border-box;
  position: fixed;
  padding: 15px 10%;
  margin-bottom: 20px;
`;

const TitleHeader = styled.h1`
  font-family: "Source Sans Pro";
  font-size: 18px;
  color: #ddd;
  margin: 0;
`;

export default Header;
