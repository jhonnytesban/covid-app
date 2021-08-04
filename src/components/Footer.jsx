import React from "react";
import {
  FooterStyled,
  TitleFooter,
  ContainerIcons,
  Link,
  Icon,
  ParagraphFooter,
} from "../styles/Footer";
import Github from "../assets/github.png";
import Gmail from "../assets/gmail.png";
import Linkedin from "../assets/linkedin.png";

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

export default Footer;
