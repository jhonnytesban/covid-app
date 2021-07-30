import React, { useState, useEffect, memo } from "react";
import { fetchInfoRange } from "../helpers/fecthInfoRange";
import { Subtitles } from "../styles/Subtitles";
import Graphic from "./Graphic";

const Rangegraphic = memo(() => {
  const [infoRange, setInfoRange] = useState([]);

  useEffect(() => {
    fetchInfoRange("spain").then((res) => {
      setInfoRange(res);
    });
  }, []);

  return (
    <>
      <Subtitles>Contagios por día del mes</Subtitles>
      {infoRange.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <Graphic info={infoRange} />
      )}
    </>
  );
});

export default Rangegraphic;
