import styled from "styled-components";

const Container = styled.h2`
  color: #54565a;
  font-size: 1.5rem;
  font-weight: normal;
  font-family: SFProDisplay;
  margin-top: 1.875rem;
`;

const UserName = styled.span`
  font-weight: bold;
  color: rgb(236, 80, 102);
  font-family: SFProDisplay;
`;

export default function WelcomeMessage({ name }) {
  return (
    <Container>
      Hi, <UserName>{name}</UserName> 👋
    </Container>
  );
}
