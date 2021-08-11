import React from "react";
import Search from "../components/Search";
import { MainStyled } from "../styles/Main";
import Titles from "../styles/Titles";

const InfoRangeCountry = () => {
  return (
    <>
      <MainStyled>
        <Titles>Búsqueda de información por países y fechas</Titles>
        <Search />
      </MainStyled>
    </>
  );
};

export default InfoRangeCountry;
