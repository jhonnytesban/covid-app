let fecha = new Date().toISOString().slice(0, 7);
let fechaActual = new Date().toISOString().slice(0, 10);
export const fetchInfoRange = async (countries) => {
  const res = await fetch(
    `https://api.covid19tracking.narrativa.com/api/country/${countries}?date_from=${fecha}-01&date_to=${fechaActual}`
  );
  const data = await res.json();
  const { dates } = await data
  const dataArray = await Object.values(dates)
  return dataArray
};
