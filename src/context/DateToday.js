import React, { useState, useEffect ,createContext } from "react";

export const TodayContext = createContext();

export const DateProvider = ({ children }) => {
  const [day, setDay] = useState(null)

  useEffect(() => {
    let nowDay = new Date().toISOString().slice(0, 10)
    setDay(nowDay)
  }, [])

  return(
    <TodayContext.Provider value={{
      day
      }}>
      { children }
    </TodayContext.Provider>
  )
}