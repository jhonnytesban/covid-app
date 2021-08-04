import styled from "styled-components";
import { bps } from "./BreakPoints";

export const Paragraph = styled.p`
  font-family: "Source Sans Pro";
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 1px;
  text-align: left;
  color: hsla(0, 0%, 100%, 0.75);
  ${bps.desktop} {
    text-align: justify;
  }
`;
