import styled from "styled-components";

const TextInput = styled.input`
  background-color: #fdfcfc;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  font-size: 16px;
  outline: none;
  padding: 15px;
  width: 100%;

  &::placholder {
    color: #54565a;
  }
`;

export default TextInput;
