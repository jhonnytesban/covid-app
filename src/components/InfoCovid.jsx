import React, { useContext } from "react";
import { DateOrganizedContext } from "../context/DateOrganized";
import { useInfoCovid } from "../hooks/useInfoCovid";
import { Paragraph } from "../styles/Paragrahph";
import SectionStyled from "../styles/Section";

const InfoCovid = () => {
  const { dateCorrect } = useContext(DateOrganizedContext);

  const [infoSpain] = useInfoCovid();

  return (
    <>
      <SectionStyled>
        <Paragraph>
          Fecha de hoy: {dateCorrect ? dateCorrect : "cargando..."}
        </Paragraph>
        <Paragraph>
          Nuevos confirmados:{" "}
          {infoSpain.today_new_confirmed
            ? infoSpain.today_new_confirmed
            : "cargando..."}
        </Paragraph>
        <Paragraph>
          Fallecidos:{" "}
          {infoSpain.today_new_deaths
            ? infoSpain.today_new_deaths
            : "cargando..."}
        </Paragraph>
        <Paragraph>
          Casos activos:{" "}
          {infoSpain.today_new_open_cases
            ? infoSpain.today_new_open_cases
            : "cargando..."}
        </Paragraph>
      </SectionStyled>
    </>
  );
};

export default InfoCovid;
