import React, { useState } from "react";
import {
  NavStyled,
  MenuStyled,
  ItemStyled,
  LinkStyled,
  ButtonMenu,
} from "../styles/Navbar";
import image from "../assets/menu.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <ButtonMenu
        src={image}
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />
      <NavStyled isActive={isActive}>
        <MenuStyled>
          <ItemStyled>
            <LinkStyled to="/" onClick={() => setIsActive(!isActive)}>
              Datos de España
            </LinkStyled>
          </ItemStyled>
          <ItemStyled>
            <LinkStyled to="/countries" onClick={() => setIsActive(!isActive)}>
              Búsqueda de Países
            </LinkStyled>
          </ItemStyled>
        </MenuStyled>
      </NavStyled>
    </>
  );
};

export default Navbar;
