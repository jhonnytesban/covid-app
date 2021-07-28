import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>X</button>
      <NavStyled isActive={isActive}>
        <MenuStyled>
          <ItemStyled>
            <LinkStyled to="/">Ir a inicio</LinkStyled>
          </ItemStyled>
          <ItemStyled>
            <LinkStyled to="/countries">Información por países</LinkStyled>
          </ItemStyled>
        </MenuStyled>
      </NavStyled>
    </>
  );
};

const NavStyled = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: ${(props) => (props.isActive === true ? "0" : "100%")};
  transition: all 0.8s;
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
