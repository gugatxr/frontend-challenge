import { Container, Title, Author, CoverContainer, CoverImg } from "./styles";

export default function BookItem({ link, title, author, coverImage }) {
  author = author.length > 0 ? author[0] : null;

  return (
    <Container to={link}>
      <CoverContainer>
        {coverImage && <CoverImg src={coverImage} />}
      </CoverContainer>
      <Title>{title}</Title>
      <Author>by {author}</Author>
    </Container>
  );
}
