import React, { useState, useEffect, useContext, memo } from "react";
import { DateOrganizedContext } from "../context/DateOrganized";
import { TodayContext } from "../context/DateToday";
import { Paragraph } from "../styles/Paragrahph";
import SectionStyled from "../styles/Section";

const InfoCovid = memo(() => {
  const { day } = useContext(TodayContext);
  const { dateCorrect } = useContext(DateOrganizedContext);

  const [infoSpain, setInfoSpain] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      if (day) {
        const res = await fetch(
          `https://api.covid19tracking.narrativa.com/api/${day}/country/spain`
        );
        const data = await res.json();
        const { dates } = await data;
        const datesArray = Object.entries(dates);
        const datesObject = datesArray[0][1];
        const { countries } = datesObject;
        setInfoSpain(countries.Spain);
      }
    };
    fetching();
  }, [day]);

  return (
    <>
      <SectionStyled>
        <Paragraph>Fecha de hoy: {dateCorrect ? dateCorrect : 'cargando...'}</Paragraph>
        <Paragraph>
          Nuevos confirmados: {infoSpain.today_new_confirmed ? infoSpain.today_new_confirmed : 'cargando...'}
        </Paragraph>
        <Paragraph>Fallecidos: {infoSpain.today_new_deaths ? infoSpain.today_new_deaths : 'cargando...'}</Paragraph>
        <Paragraph>Casos activos: {infoSpain.today_new_open_cases ? infoSpain.today_new_open_cases : 'cargando...'}</Paragraph>
      </SectionStyled>
    </>
  );
});

export default InfoCovid;
