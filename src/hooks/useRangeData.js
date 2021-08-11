import { useState } from "react";

const useRangeData = () => {
  const [infoCountry, setInfoCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  // const [country, setCountry] = useState('')

  const handleData = async (country, startDate, finalDate) => {
    setIsLoading(true)
    const res = await fetch(
      `https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${startDate}&date_to=${finalDate}`
      );
      const data = await res.json();
      const { dates } = await data;
      const dataArray = await Object.values(dates);
      setInfoCountry(dataArray)
      setIsLoading(false)
  };

  return {isLoading, infoCountry, handleData};
};

export default useRangeData;
