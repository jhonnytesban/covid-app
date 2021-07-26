import React, { useState, useEffect } from "react";
import { fetchInfoRange } from "../helpers/fecthInfoRange";

const Rangegraphic = () => {
  const [infoRange, setInfoRange] = useState([]);

  useEffect(() => {
    fetchInfoRange()
      .then((res) => setInfoRange(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Rango de contagios</h2>
      {infoRange.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        infoRange.map((el) => {
          let num = Math.floor(Math.random() * 9999999 + 1);
          return <p key={num}>{el.countries.Spain.today_new_confirmed}</p>;
        })
      )}
    </>
  );
};

export default Rangegraphic;
