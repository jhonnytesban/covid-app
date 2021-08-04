import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import GraphicContainer from "../styles/GraphicContainer";
import { Subtitles } from "../styles/Subtitles";

const Graphic = ({ info }) => {
  const [newConfirmed, setNewConfirmed] = useState([]);
  const [newDead, setNewDead] = useState([]);
  const [day, setDay] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cases = [];
    let today = [];
    let dead = [];
    if (info.length !== 0) {
      info.forEach((el, i) => {
        const prueba = Object.entries(el.countries);
        if (prueba.length !== 0) {
          setError(true);
          const dateObject = prueba[0][1];
          setError(dateObject);
          const { today_new_confirmed, date, today_new_deaths } = dateObject;
          cases.push(today_new_confirmed);
          setNewConfirmed(cases);
          today.push(date);
          setDay(today);
          dead.push(today_new_deaths);
          setNewDead(dead);
        }
      });
      cases.pop();
      today.pop();
      dead.pop();
    }
  }, [info]);

  const data = {
    labels: day,
    datasets: [
      {
        data: newConfirmed,
        backgroundColor: [
          "#E74C3C",
          "#9B59B6",
          "#2980B9",
          "#16A085",
          "#F1C40F",
          "#95A5A6",
          "#2C3E50",
        ],
        borderColor: "#fff",
        pointRadius: 4,
      },
    ],
  };
  const data2 = {
    labels: day,
    datasets: [
      {
        data: newDead,
        backgroundColor: [
          "#E74C3C",
          "#9B59B6",
          "#2980B9",
          "#16A085",
          "#F1C40F",
          "#95A5A6",
          "#2C3E50",
        ],
        borderColor: "#fff",
        pointRadius: 4,
      },
    ],
  };
  const option = {
    responsive: true,
  };

  return (
    <>
      {error !== null && (
        <>
          <GridContainer>
            <GraphicContainer>
              <Subtitles>Contagios por dia</Subtitles>
              <Line data={data} options={option} />
            </GraphicContainer>
            <GraphicContainer>
              <Subtitles>Muertes por dia</Subtitles>
              <Line data={data2} options={option} />
            </GraphicContainer>
          </GridContainer>
        </>
      ) }
    </>
  );
};

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: 40px;
`;

export default Graphic;
