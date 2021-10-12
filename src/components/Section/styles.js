import styled from "styled-components";

const Container = styled.section`
  margin-top: 1.875rem;
  position: relative;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #3f4043;
  font-size: 1.125rem;
  font-weight: 300;
  margin: 0;
`;

const Link = styled.a`
  color: #4abdf1;
  font-size: 0.875rem;
  position: relative;
  text-decoration: none;
  z-index: 3;
`;

export { Container, HeaderContainer, Title, Link };
