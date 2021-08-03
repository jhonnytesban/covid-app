import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import image from '../assets/menu.svg';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <ButtonMenu src={image} isActive={isActive} onClick={() => setIsActive(!isActive)}/>
      <NavStyled isActive={isActive}>
        <MenuStyled>
          <ItemStyled>
            <LinkStyled to="/" onClick={() => setIsActive(!isActive)}>Ir a inicio</LinkStyled>
          </ItemStyled>
          <ItemStyled>
            <LinkStyled to="/countries" onClick={() => setIsActive(!isActive)}>Información por países</LinkStyled>
          </ItemStyled>
        </MenuStyled>
      </NavStyled>
    </>
  );
};

export const bps = {
  desktop: '@media screen and (min-width: 800px)'
}


const ButtonMenu = styled.img`
  position: absolute;
  right: ${props => props.isActive === true ?'70%' : '10%'};
  transform: ${props => props.isActive === true ? 'rotate(-90deg)' : 'rotate(0deg)'};
  transition: all .5s;
  z-index: ${props => props.isActive === true ?'100' : '0'};
  ${bps.desktop} {
    display: none;
  }
`

const NavStyled = styled.nav`
  backdrop-filter: ${(props) => (props.isActive === true ? 'blur(10px)' : "blur(0)")};
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: ${(props) => (props.isActive === true ? "0" : "100%")};
  transition: all .8s;
  
  ${bps.desktop} {
    display: block;
    width: 85%;
    background-color: #282d36;
    position: static;
    backdrop-filter: blur(0);
  }
  `;

const MenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  background-color: black;
  width: 60%;
  height: 100%;
  margin: 0;
  padding: 0;
  ${bps.desktop} {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #282d36;
  }
`;

const ItemStyled = styled.li`
  text-decoration: none;
  color: #fff;
  ${bps.desktop} {
    margin: 0 10px;
    transition: all .3s;
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
`;
const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

export default Navbar;
