import React, { useState, useEffect, memo } from "react";
import { fetchInfoRange } from "../helpers/fecthInfoRange";
import Graphic from "./Graphic";

const Rangegraphic = memo(() => {
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
})

export default Rangegraphic;
