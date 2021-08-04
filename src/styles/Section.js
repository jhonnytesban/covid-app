import styled from "styled-components";
import { bps } from './BreakPoints';

const SectionStyled = styled.section`
  padding: 0 15%;
  margin-bottom: 50px;
  ${bps.desktop} {
    padding:0 30%;
  }
`;

export default SectionStyled;
