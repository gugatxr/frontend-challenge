import { useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import useBookDetails from "hooks/useBookDetails";
import {
  MainContainer,
  Title,
  Subtitle,
  ContentWrapper,
  Author,
} from "./styles";
import Interweave from "interweave";
import { useHistory } from "react-router-dom";
import Header from "components/DetailsBook/Header";
import BackButton from "components/DetailsBook/BackButton";
import Cover from "components/DetailsBook/Cover";

export default function DetailsScreen() {
  const { id } = useParams();
  const { book } = useBookDetails(id);
  const history = useHistory(book);

  const Description = useMemo(() => {
    if (!book) {
      return null;
    }

    return <Interweave content={book.volumeInfo.description} />;
  }, [book]);

  const onBackClick = useCallback(
    (event) => {
      event.preventDefault();
      if (history.action !== "POP") {
        history.goBack();
        return;
      }

      history.push("/");
    },
    [history]
  );

  if (!book) {
    return null;
  }

  return (
    <MainContainer>
      <Header>
        <Cover src={book.volumeInfo.imageLinks.thumbnail} />
        <BackButton onClick={onBackClick} />
      </Header>
      <ContentWrapper>
        <Title>
          {book.volumeInfo.title}
          <Subtitle>
            {" "}
            {book.volumeInfo.subtitle && <>: {book.volumeInfo.subtitle}</>}
          </Subtitle>
        </Title>

        <Author>{book.volumeInfo.authors[0]}</Author>
        {Description}
      </ContentWrapper>
    </MainContainer>
  );
}
