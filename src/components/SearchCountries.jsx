import React, { useState } from "react";
import Graphic from "./Graphic";
import { fetchInfoRange } from "../helpers/fecthInfoRange";

const SearchCountries = () => {
  const [infoCountry, setInfoCountry] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchInfoRange(text).then((res) => {
      setInfoCountry(res);
      setText("");
      setIsLoading(false);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un país"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Buscar" />
      </form>
      {isLoading ? <p>cargando...</p> : <Graphic info={infoCountry} />}
    </>
  );
};

export default SearchCountries;
