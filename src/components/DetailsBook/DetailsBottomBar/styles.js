import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    opacity: 0.5;
    bottom: -10px;
  }

  to {
    opacity: 1;
    bottom: 53px;
  }
`;

const WrapContainer = styled.nav`
  animation-duration: 2s;
  animation-name: ${slideInAnimation};
  bottom: 53px;
  left: 0;
  margin: auto;
  max-width: 500px;
  right: 0;
  position: fixed;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 3px 3px 23px 0px #6b674620;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  padding: 0 20px;
`;

const ItemName = styled.span`
  color: #3f4043;
  font-size: 14px;
  font-weight: 700;
  padding-left: 10px;
`;

const ItemContainer = styled.a`
  background: transparent;
  border: none;
  display: flex;
  text-decoration: none;
  padding: 20px 0;
`;

const Divider = styled.div`
  background-color: rgba(151, 151, 151, 0.2);
  height: 16px;
  width: 2px;
`;

export { WrapContainer, Container, ItemName, ItemContainer, Divider };
