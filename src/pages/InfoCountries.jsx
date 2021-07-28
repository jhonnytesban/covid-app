import React, { useState, memo } from "react";
import Graphic from "../components/Graphic";
import { fetchInfoRange } from "../helpers/fecthInfoRange";
import Titles from "../styles/Titles";

const InfoCountries = memo(() => {

  const [infoCountry, setInfoCountry] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(text)
    fetchInfoRange(text)
      .then((res) => {
        setInfoCountry(res)
        console.log(infoCountry)
      });
  };

  return (
    <>
      <Titles>Soy el componente de Información por países</Titles>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un país"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Buscar" />
      </form>
      {infoCountry.length === 0 ? (
        <p>Cargando datos...</p>
      ) : (
        <Graphic info={infoCountry} text={text}/>
      )}
    </>
  );
});

export default InfoCountries;
