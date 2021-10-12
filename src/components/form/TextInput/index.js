import styled from "styled-components";

const TextInput = styled.input`
  background-color: #fdfcfc;
  border: none;
  border-radius: 10px;
  box-shadow: 0.313rem 0.313rem 80px rgba(212, 173, 134, 0.122623);
  font-family: SFProDisplay;
  font-size: 1rem;
  outline: none;
  padding: 0.938rem;
  width: 100%;

  &::placholder {
    color: #54565a;
  }
`;

export default TextInput;
