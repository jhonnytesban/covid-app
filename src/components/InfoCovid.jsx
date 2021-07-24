import React, { useState, useEffect } from 'react'
import { Pie, Bar, Radar } from 'react-chartjs-2'

const InfoCovid = () => {
  const [infoSpain, setInfoSpain] = useState([])
  const [dateToday, setDate] = useState(null)

  const data  = {
    labels: ['Nuevos infectados', 'Fallecidos', 'Curados'],
    datasets: [{
      data: [infoSpain.today_new_confirmed, infoSpain.today_new_deaths, 100],
      backgroundColor: ['yellow', 'red', 'green']
    }]
  }
  const option = {
    responsive: true
  }

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
      <p>Soy el componente de la informacion</p>
      {dateToday && <p>{dateToday}</p>}
      {infoSpain && <p>Hoy se han registrado {infoSpain.today_new_confirmed} casos de covid en España</p>}
      <div style={{width: 500,}} className="container-graphic">
        <Pie data={data} options={option}/>

      </div>
    </>
  )
}

export default InfoCovid
