import React, { useState, useEffect, useContext, memo } from 'react'
import { TodayContext } from '../context/DateToday'
import { Paragraph } from '../styles/Paragrahph'
import { Subtitles } from '../styles/Subtitles'

const InfoCovid = memo(() => {

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
      <Subtitles>Datos de {infoSpain.name_es}</Subtitles>
      <Paragraph>Fecha de hoy {day}</Paragraph>
      <Paragraph>Nuevos confirmados: {infoSpain.today_new_confirmed}</Paragraph>
      <Paragraph>Fallecidos: {infoSpain.today_new_deaths}</Paragraph>
      <Paragraph>Casos activos: {infoSpain.today_new_open_cases}</Paragraph>
    </>
  )
})

export default InfoCovid
