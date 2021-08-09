import React, { useState } from "react";
import Graphic from "./Graphic";
import Spinner from "./Spinner";
import { translation } from "../helpers/TranslationCountry";
import Search from "../assets/search.svg";
import { FormStyled, InputSubmit, InputText } from "../styles/Search";
import useInfoRange from "../hooks/useInfoRange";

const SearchCountries = () => {
  const { infoRange, handleCountry } = useInfoRange();

  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const textLow = text.toLowerCase();
    const country = translation(textLow);
    handleCountry(country);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
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
