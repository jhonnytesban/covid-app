import React, { useState, useEffect } from "react";
import { fetchInfoRange } from "../helpers/fecthInfoRange";
import Graphic from "./Graphic";

const Rangegraphic = () => {
  const [infoRange, setInfoRange] = useState([]);

  useEffect(() => {
    fetchInfoRange()
      .then((res) =>{ 
        setInfoRange(res)
      })
  }, []);

  return (
    <>
      <h2>Rango de contagios</h2>
      <Graphic info={infoRange}/>
    </>
  );
};

export default Rangegraphic;
