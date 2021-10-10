import { Container, Title, Author, CoverContainer, CoverImg } from "./styles";

export default function BookItem({ title, author, coverImage }) {
  author = author.length > 0 ? author[0] : null;

  return (
    <Container>
      <CoverContainer>
        {coverImage && <CoverImg src={coverImage} />}
      </CoverContainer>
      <Title>{title}</Title>
      <Author>by {author}</Author>
    </Container>
  );
}
