import styled from "styled-components";
import { bps } from "../styles/BreakPoints";

export const FooterStyled = styled.footer`
  background-color: #282d36;
  padding: 40px 40px;
  ${bps.desktop} {
    padding: 40px 20%;
  }
`;
export const TitleFooter = styled.h2`
  font-size: 24px;
  font-family: "Source Sans Pro";
  font-weight: 200;
  text-align: center;
  color: #fff;
  margin: 0 0 40px 0;
`;
export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Icon = styled.img`
  width: 100%;
`;

export const Link = styled.a`
  width: 8%;
  text-decoration: none;
  text-align: center;
  ${bps.desktop} {
    width: 4%;
    &:hover {
      transform: scale(1.3, 1.3);
    }
    transition: all 0.4s;
  }
`;

export const ParagraphFooter = styled.p`
  font-size: 0.8rem;
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 1.3rem;
  color: hsla(0, 0%, 100%, 0.75);
  margin: 0;
`;
