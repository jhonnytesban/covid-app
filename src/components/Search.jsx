import React, { useContext, useState } from "react";
import IconSearch from "../assets/search.svg";
import { TodayContext } from "../context/DateToday";
import { fetchRangeDate } from "../helpers/fetchRangeDate";
import { translation } from "../helpers/TranslationCountry";
import { FormStyled, InputSubmit, InputText } from "../styles/Search";
import Graphic from "./Graphic";
import Spinner from "./Spinner";

const Search = () => {
  const { day } = useContext(TodayContext);

  const [text, setText] = useState('')
  const [startDate, setStartDate] = useState('')
  const [finalDate, setFinalDate] = useState('')
  const [infoCountry, setInfoCountry] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    if(startDate !== ''.trim() && finalDate !== ''.trim()) {
      const textLow = text.toLowerCase();
      const country = translation(textLow);
      setText('')
      fetchRangeDate(country, startDate, finalDate).then(res => {
        setInfoCountry(res)
        setIsLoading(false)
      })
      
    } else {
      alert('Escriba el país y las fechas correctamente')
      setIsLoading(false)
    }
  }

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <InputText
          type="text"
          placeholder="Escribe un país"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <InputSubmit type="image" title="Buscar" src={IconSearch} />
        <label>Desde</label>
        <input type="date" max={day} value={startDate} onChange={e => setStartDate(e.target.value)}/>

        <label>Hasta</label>
        <input type="date" max={day} value={finalDate} onChange={e => setFinalDate(e.target.value)}/>
      </FormStyled>
      {isLoading ? <Spinner /> : <Graphic info={infoCountry}/>}
    </>
  );
};

export default Search;
