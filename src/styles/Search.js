import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const InputText = styled.input`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  border-bottom: 1px solid #fff;
  margin: 0 10px;
  color: #fff;
  &::placeholder {
    color: hsla(0,0%,100%,0.75);
  }
`;

export const InputSubmit = styled.input`
  cursor: pointer;
`;
