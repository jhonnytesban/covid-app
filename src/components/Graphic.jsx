import React from "react";
import { Pie } from "react-chartjs-2";

const Graphic = () => {
  const data = {
    labels: ["Nuevos infectados", "Fallecidos", "Curados"],
    datasets: [
      {
        data: [100, 100, 100],
        backgroundColor: ["yellow", "red", "green"],
      },
    ],
  };
  const option = {
    responsive: true,
  };

  return (
    <div style={{ width: 500 }} className="container-graphic">
      <Pie data={data} options={option} />
    </div>
  );
};

export default Graphic;
