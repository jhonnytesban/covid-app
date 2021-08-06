import React from "react";
import InfoCovid from "../components/InfoCovid";
import Rangegraphic from "../components/Rangegraphic";
import { MainStyled } from "../styles/Main";
import Titles from "../styles/Titles";

const HomePage = () => {
  return (
    <>
      <MainStyled>
        <Titles>Datos del Covid 19 en España</Titles>
        <InfoCovid />
        <Rangegraphic />
      </MainStyled>
    </>
  );
};

export default HomePage;
