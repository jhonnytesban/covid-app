import { useState, useEffect, useContext } from "react";
import { TodayContext } from "../context/DateToday";

const useInfoRange = (initialValue) => {
  const { day } = useContext(TodayContext);
  const [infoRange, setInfoRange] = useState([]);
  const [countries, setCountries] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  const handleCountry = (country) => {
    setCountries(country);
  };

  useEffect(() => {
    const fetchInfoRange = async () => {
      setIsLoading(true);
      let fecha = new Date().toISOString().slice(0, 7);
      if (day) {
        const res = await fetch(
          `https://api.covid19tracking.narrativa.com/api/country/${countries}?date_from=${fecha}-01&date_to=${day}`
        );
        const data = await res.json();
        const { dates } = await data;
        const dataArray = await Object.values(dates);
        setInfoRange(dataArray);
      }
      setIsLoading(false);
    };
    fetchInfoRange();
  }, [day, countries]);
  return { infoRange, handleCountry, isLoading };
};

export default useInfoRange;
