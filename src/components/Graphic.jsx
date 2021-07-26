import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Graphic = ({ info }) => {
  const [newConfirmed, setNewConfirmed] = useState([]);
  const [day, setDay] = useState([]);

  useEffect(() => {
    let cases = [];
    let today = []
    if (info.length !== 0) {
      info.map((el) => {
        cases.push(el.countries.Spain.today_new_confirmed)
        setNewConfirmed(cases);
        today.push(el.countries.Spain.date)
        setDay(today);
      });
    }
  }, [info]);

  const data = {
    labels: day,
    datasets: [
      {
        data: newConfirmed,
        backgroundColor: ["#E74C3C", "#9B59B6", "#2980B9", "#16A085", "#F1C40F", "#95A5A6", "#2C3E50"],
      },
    ],
  };
  const option = {
    responsive: true,
  };

  return (
    <>
      {info.length !== 0 ? (
        <div style={{ width: 350 }}>
          <Bar data={data} options={option} />
        </div>
      ) : (
        <p>Cargando gráfico ...</p>
      )}
    </>
  );
};

export default Graphic;
