import React from "react";
import styled from "styled-components";
import Github from "../assets/github.png";
import Gmail from "../assets/gmail.png";
import Linkedin from "../assets/linkedin.png";
import { bps } from "./Navbar";

const Footer = () => {
  return (
    <>
      <FooterStyled>
        <TitleFooter>Encuentra y conoce más proyectos</TitleFooter>
        <ContainerIcons>
          <Link href="https://github.com/jhonnytesban" target="_blank">
            <Icon src={Github} />
          </Link>
          <Link href="mailto:jonathanestebangalan@gmail.com" target="_blank">
            <Icon src={Gmail} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jonathan-esteban-gal%C3%A1n-2110191b3/"
            target="_blank"
          >
            <Icon src={Linkedin} />
          </Link>
        </ContainerIcons>
        <ParagraphFooter>
          Información obtenida de la universidad "John Hopkins University"
        </ParagraphFooter>
      </FooterStyled>
    </>
  );
};

const FooterStyled = styled.footer`
  background-color: #282d36;
  padding: 40px 40px;
  ${bps.desktop} {
    padding: 40px 20%;
  }
`;
const TitleFooter = styled.h2`
  font-size: 24px;
  font-family: "Source Sans Pro";
  font-weight: 200;
  text-align: center;
  color: #fff;
  margin: 0 0 40px 0;
`;
const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Icon = styled.img`
  width: 100%;
`;

const Link = styled.a`
  width: 8%;
  text-decoration: none;
  text-align: center;
  ${bps.desktop} {
    width: 4%;
    &:hover {
      transform: scale(1.3, 1.3);
    }
    transition: all .4s;
  }
`;

const ParagraphFooter = styled.p`
  font-size: 0.8rem;
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 1.3rem;
  color: hsla(0, 0%, 100%, 0.75);
  margin: 0;
`;

export default Footer;
