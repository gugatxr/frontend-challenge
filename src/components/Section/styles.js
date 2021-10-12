import styled from "styled-components";

const Container = styled.section`
  margin-top: 30px;
  position: relative;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #3f4043;
  font-size: 18px;
  font-weight: 300;
  margin: 0;
`;

const Link = styled.a`
  color: #4abdf1;
  font-size: 14px;
  position: relative;
  text-decoration: none;
  z-index: 3;
`;

export { Container, HeaderContainer, Title, Link };
