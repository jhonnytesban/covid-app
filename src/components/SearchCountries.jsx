import React, { useState } from "react";
import styled from "styled-components";
import Graphic from "./Graphic";
import Spinner from "./Spinner";
import { fetchInfoRange } from "../helpers/fecthInfoRange";
import { translation } from "../helpers/TranslationCountry";
import {Search} from '../assets/search.png';

const SearchCountries = () => {
  const [infoCountry, setInfoCountry] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    text.toLowerCase();
    const country = translation(text);
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

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputText = styled.input`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  border-bottom: 1px solid #fff;
  margin: 0 10px;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;

const InputSubmit = styled.input`
  cursor: pointer;
`

export default SearchCountries;
