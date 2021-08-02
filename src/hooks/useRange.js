import { useState, useEffect, useContext } from "react";
import { TodayContext } from "../context/DateToday";

const useRange = (countries = "spain") => {
  const { day } = useContext(TodayContext);

  const [dataRange, setDataRange] = useState([]);
  const [country, setCountry] = useState(countries)

  const handleCountry = (newCountry) => {
    setCountry(newCountry)
  }

  useEffect(() => {
    let fecha = new Date().toISOString().slice(0, 7);
    const fetching = async () => {
      if (day && country) {
        const res = await fetch(
          `https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${fecha}-01&date_to=${day}`
        );
        const data = await res.json();
        const { dates } = await data;
        const dataArray = await Object.values(dates);
        setDataRange(dataArray);
        console.log(dataArray)
      }
    };
    fetching();
  }, [day, country]);

  return {
    dataRange,
    handleCountry
  };
};

export default useRange;
