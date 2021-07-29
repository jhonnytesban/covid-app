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

const ButtonMenu = styled.img`
  position: absolute;
  right: ${props => props.isActive === true ?'70%' : '10%'};
  transform: ${props => props.isActive === true ? 'rotate(-90deg)' : 'rotate(0deg)'};
  transition: all .5s;
  z-index: ${props => props.isActive === true ?'100' : '0'};
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
`;

const ItemStyled = styled.li`
  text-decoration: none;
  color: #fff;
`;
const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

export default Navbar;
