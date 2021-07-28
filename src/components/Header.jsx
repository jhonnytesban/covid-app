import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <HeaderStyled>
      <TitleHeader>InfoCovid</TitleHeader>
      <Navbar />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  margin-bottom: 20px;
`

const TitleHeader = styled.h1`
  margin: 0;
`

export default Header
