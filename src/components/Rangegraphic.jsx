import React, { useState, useEffect, memo } from "react";
import { fetchInfoRange } from "../helpers/fecthInfoRange";
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
      <h2>Rango de contagios</h2>
      {infoRange.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <Graphic info={infoRange} />
      )}
    </>
  );
});

export default Rangegraphic;
