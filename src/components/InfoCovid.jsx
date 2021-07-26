import React, { useState, useEffect } from 'react'

const InfoCovid = () => {
  const [infoSpain, setInfoSpain] = useState([])
  const [dateToday, setDate] = useState(null)


  useEffect(() => {
    const fetching = async () => {
      let date = new Date().toISOString().slice(0, 10) 
      setDate(date)
      const res = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/spain`)
      const data = await res.json()
      const { dates } = await data
      const datesArray = Object.entries(dates)
      const datesObject = datesArray[0][1]
      const { countries } = datesObject
      console.log(countries)
      setInfoSpain(countries.Spain)
    }
    fetching()
  }, [])

  return (
    <>
      <h2>Datos de {infoSpain.name_es}</h2>
      <p>Fecha de hoy {dateToday}</p>
      <p>Nuevos confirmados: {infoSpain.today_new_confirmed}</p>
      <p>Fallecidos: {infoSpain.today_new_deaths}</p>
      <p>Casos activos: {infoSpain.today_new_open_cases}</p>
    </>
  )
}

export default InfoCovid
