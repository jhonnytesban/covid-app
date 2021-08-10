import React, { useState } from "react";
import useInfoRange from "../hooks/useInfoRange";
import { translation } from "../helpers/TranslationCountry";
import Graphic from "./Graphic";
import Spinner from "./Spinner";
import { FormStyled, InputSubmit, InputText } from "../styles/Search";
import Search from "../assets/search.svg";

const SearchCountries = () => {
  const { infoRange, handleCountry, isLoading } = useInfoRange();

  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textLow = text.toLowerCase();
    const country = translation(textLow);
    handleCountry(country);
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
        <InputSubmit type="image" title="Buscar" src={Search} />
      </FormStyled>
      {isLoading ? <Spinner /> : <Graphic info={infoRange} />}
    </>
  );
};

export default SearchCountries;
