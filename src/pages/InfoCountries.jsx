import React from "react";
import SearchCountries from "../components/SearchCountries";
import { MainStyled } from "../styles/Main";
import Titles from "../styles/Titles";

const InfoCountries = () => {
  return (
    <>
      <MainStyled>
        <Titles>Soy el componente de Información por países</Titles>
        <SearchCountries />
      </MainStyled>
    </>
  );
};

export default InfoCountries;
