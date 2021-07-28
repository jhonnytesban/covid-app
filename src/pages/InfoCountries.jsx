import React, { useContext, useState } from "react";
import { TodayContext } from "../context/DateToday";
import Titles from "../styles/Titles";

const InfoCountries = () => {
  const {day} = useContext(TodayContext)

  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentMonth = await new Date().toISOString().slice(0, 7);
    const res = await fetch(`https://api.covid19tracking.narrativa.com/api/country/${text}?date_from=${currentMonth}-01&date_to=${day}`)
    const data = await res.json()
    const { dates } = await data
    const dataArray = await Object.values(dates)
    console.log(dataArray)
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
    </>
  );
};

export default InfoCountries;
