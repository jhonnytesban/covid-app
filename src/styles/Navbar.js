import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { bps } from "./BreakPoints";

export const ButtonMenu = styled.img`
  position: absolute;
  right: ${(props) => (props.isActive === true ? "70%" : "10%")};
  transform: ${(props) =>
    props.isActive === true ? "rotate(-90deg)" : "rotate(0deg)"};
  transition: all 0.5s;
  z-index: ${(props) => (props.isActive === true ? "100" : "0")};
  ${bps.desktop} {
    display: none;
  }
`;

export const NavStyled = styled.nav`
  backdrop-filter: ${(props) =>
    props.isActive === true ? "blur(10px)" : "blur(0)"};
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: ${(props) => (props.isActive === true ? "0" : "100%")};
  transition: all 0.8s;

  ${bps.desktop} {
    display: block;
    width: 85%;
    background-color: #282d36;
    position: static;
    backdrop-filter: blur(0);
  }
`;

export const MenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  background-color: black;
  width: 60%;
  height: 100%;
  margin: 0;
  padding: 10px 0;
  ${bps.desktop} {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #282d36;
    padding: 0;
  }
`;

export const ItemStyled = styled.li`
  text-decoration: none;
  color: #fff;
  margin: 10px 0;
  ${bps.desktop} {
    margin: 0 20px;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
`;
export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;
