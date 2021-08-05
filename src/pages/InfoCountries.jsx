import React from "react";
import SearchCountries from "../components/SearchCountries";
import { MainStyled } from "../styles/Main";
import Titles from "../styles/Titles";

const InfoCountries = () => {
  return (
    <>
      <MainStyled>
        <Titles>Búsqueda de información por países</Titles>
        <SearchCountries />
      </MainStyled>
    </>
  );
};

export default InfoCountries;
