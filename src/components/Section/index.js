import { Container, HeaderContainer, Title, Link } from "./styles";
export default function Section({ children, title, linkText, link = "#" }) {
  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
        <Link href={link}>{linkText}</Link>
      </HeaderContainer>
      {children}
    </Container>
  );
}
