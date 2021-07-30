import React, { useState, createContext, useContext, useEffect } from "react";
import { TodayContext } from "./DateToday";

export const DateOrganizedContext = createContext();

const DateOrganizedProvider = ({ children }) => {
  const { day } = useContext(TodayContext);
  const [dateCorrect, setDateCorrect] = useState(null)

  useEffect(() => {
    if(day) {
      const dayInverse = day.split("-");
      const dateOrganized = dayInverse.reverse();
      const dateCompleted = dateOrganized.join("-");
      setDateCorrect(dateCompleted);
    }
  }, [day]);

  return (
    <DateOrganizedContext.Provider value={{dateCorrect}}>
      {children}
    </DateOrganizedContext.Provider>
  );
};

export default DateOrganizedProvider;
