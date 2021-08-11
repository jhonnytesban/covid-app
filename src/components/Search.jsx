import React, { useContext, useState } from "react";
import styled from "styled-components";
import Graphic from "./Graphic";
import Spinner from "./Spinner";
import IconSearch from "../assets/search.svg";
import { TodayContext } from "../context/DateToday";
import { translation } from "../helpers/TranslationCountry";
import { FormStyled, InputSubmit, InputText } from "../styles/Search";

import useRangeData from "../hooks/useRangeData";

const Search = () => {
  const { day } = useContext(TodayContext);

  const { isLoading, infoCountry, handleData } = useRangeData();

  const [text, setText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate !== "".trim() && finalDate !== "".trim()) {
      const textLow = text.toLowerCase();
      const country = translation(textLow);
      setText("");
      handleData(country, startDate, finalDate);
    } else {
      alert("Escriba el país y las fechas correctamente");
    }
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <div>
          <InputContainer>
            <InputText
              type="text"
              placeholder="Escribe un país"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <InputSubmit type="image" title="Buscar" src={IconSearch} />
          </InputContainer>
          <DateContainer>
            <LabelStyled>Desde</LabelStyled>
            <InputDate
              type="date"
              max={day}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <LabelStyled>Hasta</LabelStyled>
            <InputDate
              type="date"
              max={day}
              value={finalDate}
              onChange={(e) => setFinalDate(e.target.value)}
            />
          </DateContainer>
        </div>
      </FormStyled>
      {isLoading ? <Spinner /> : <Graphic info={infoCountry} />}
    </>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;

const LabelStyled = styled.label`
  color: #fff;
`;

const InputDate = styled.input`
  margin: 10px 0;
`;

export default Search;
