import React from 'react'
import InfoCovid from '../components/InfoCovid'
import Rangegraphic from '../components/Rangegraphic'
import Titles from '../styles/Titles'

const HomePage = () => {

  return (
    <>
      <Titles>Covid 19 en España</Titles>
      <InfoCovid />
      <Rangegraphic />
    </>
  )
}

export default HomePage
