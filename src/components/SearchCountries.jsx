import React, { useState } from "react";
import Graphic from "./Graphic";
import Spinner from "./Spinner";
import { fetchInfoRange } from "../helpers/fecthInfoRange";
import { translation } from "../helpers/TranslationCountry";
import Search from '../assets/search.svg';
import { FormStyled, InputSubmit, InputText } from "../styles/Search";

const SearchCountries = () => {
  const [infoCountry, setInfoCountry] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const textLow = text.toLowerCase();
    const country = translation(textLow);
    setIsLoading(true);
    fetchInfoRange(country).then((res) => {
      setInfoCountry(res);
      setText("");
      setIsLoading(false);
    });
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <InputText
          type="text"
          placeholder="Escribe un país"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <InputSubmit type="image" title="Buscar" src={Search}/>
      </FormStyled>
      {isLoading ? <Spinner /> : <Graphic info={infoCountry} />}
    </>
  );
};


export default SearchCountries;
