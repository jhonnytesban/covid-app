import React, { useState, useEffect, useContext } from 'react'
import { TodayContext } from '../context/DateToday'

const InfoCovid = () => {

  const { day } = useContext(TodayContext)

  const [infoSpain, setInfoSpain] = useState([])


  useEffect(() => {
    const fetching = async () => {
      if(day) {
        const res = await fetch(`https://api.covid19tracking.narrativa.com/api/${day}/country/spain`)
        const data = await res.json()
        const { dates } = await data
        const datesArray = Object.entries(dates)
        const datesObject = datesArray[0][1]
        const { countries } = datesObject
        setInfoSpain(countries.Spain)
      }
    }
    fetching()
  }, [day])

  return (
    <>
      <h2>Datos de {infoSpain.name_es}</h2>
      <p>Fecha de hoy {day}</p>
      <p>Nuevos confirmados: {infoSpain.today_new_confirmed}</p>
      <p>Fallecidos: {infoSpain.today_new_deaths}</p>
      <p>Casos activos: {infoSpain.today_new_open_cases}</p>
    </>
  )
}

export default InfoCovid
