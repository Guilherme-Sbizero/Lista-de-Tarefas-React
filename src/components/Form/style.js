import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;

export const InputText = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  background: #4da3ff;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #2f89f5;
  }
`;
