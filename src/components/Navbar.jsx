import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <>
    <button onClick={() => setIsActive(!isActive)}>X</button>
      <NavStyled isActive={isActive}>
        <MenuStyled>
          <li>
            <NavLink to="/">Ir a inicio</NavLink>
          </li>
          <li>
            <NavLink to="/countries">Información por países</NavLink>
          </li>
        </MenuStyled>
      </NavStyled>
    </>
  );
};

const NavStyled = styled.nav`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: ${props => props.isActive === true ? '100%' : '0' };
  transition: all .5s;
`;

const MenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 0;
  padding: 0;
`;

export default Navbar;
