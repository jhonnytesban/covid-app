import { useState, useEffect, useContext } from "react";
import { TodayContext } from "../context/DateToday";

export const useInfoCovid = () => {
  const { day } = useContext(TodayContext);
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
  return [infoSpain];
};
