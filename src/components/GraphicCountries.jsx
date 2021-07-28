// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import  GraphicContainer  from "../styles/GraphicContainer";

// const GraphicCountries = ({ info, text }) => {
//   const [newConfirmed, setNewConfirmed] = useState([]);
//   const [day, setDay] = useState([]);

//   useEffect(() => {
//     let cases = [];
//     let today = []
//     if (info.length !== 0) {
//       info.forEach((el, i) => {
//         const prueba = Object.entries(el.countries)
//         const dateObject = prueba[0][1]
//         const { today_new_confirmed, date } = dateObject
//         console.log(today_new_confirmed)
//         cases.push(today_new_confirmed)
//         setNewConfirmed(cases);
//         today.push(date)
//         setDay(today);
//       });
//     }
//   }, [info]);

//   const data = {
//     labels: day,
//     datasets: [
//       {
//         data: newConfirmed,
//         backgroundColor: ["#E74C3C", "#9B59B6", "#2980B9", "#16A085", "#F1C40F", "#95A5A6", "#2C3E50"],
//       },
//     ],
//   };
//   const option = {
//     responsive: true,
//   };

//   return (
//     <>
//       {info.length !== 0 ? (
//         <GraphicContainer>
//           <Bar data={data} options={option} />
//         </GraphicContainer>
//       ) : (
//         <p>Cargando gráfico ...</p>
//       )}
//     </>
//   );
// };

// export default GraphicCountries;
