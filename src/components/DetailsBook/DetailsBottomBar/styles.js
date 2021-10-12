import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    opacity: 0.5;
    bottom: -0.625rem;
  }

  to {
    opacity: 1;
    bottom: 3.313rem;
  }
`;

const WrapContainer = styled.nav`
  animation-duration: 2s;
  animation-name: ${slideInAnimation};
  bottom: 3.313rem;
  left: 0;
  margin: auto;
  max-width: var(--main-container-width);
  right: 0;
  position: fixed;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 0.125rem;
  box-shadow: 3px 3px 23px 0px #6b674620;
  display: flex;
  justify-content: space-between;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  padding: 0 1.25rem;
`;

const ItemName = styled.span`
  color: #3f4043;
  font-size: 0.875rem;
  font-weight: 700;
  padding-left: 0.625rem;
`;

const ItemContainer = styled.a`
  background: transparent;
  border: none;
  display: flex;
  text-decoration: none;
  padding: 1.25rem 0;
`;

const Divider = styled.div`
  background-color: rgba(151, 151, 151, 0.2);
  height: 1rem;
  width: 0.125rem;
`;

export { WrapContainer, Container, ItemName, ItemContainer, Divider };
