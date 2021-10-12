import { useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import useBookDetails from "hooks/useBookDetails";
import {
  MainContainer,
  Title,
  Subtitle,
  ContentWrapper,
  Author,
  Description,
} from "./styles";
import Interweave from "interweave";
import { useHistory } from "react-router-dom";
import Header from "components/DetailsBook/Header";
import BackButton from "components/DetailsBook/BackButton";
import Cover from "components/DetailsBook/Cover";
import * as DetailsBottomBar from "components/DetailsBook/DetailsBottomBar";
import shareIcon from "assets/shareIcon.svg";
import openBookIcon from "assets/openBookIcon.svg";
import headphoneIcon from "assets/headphoneIcon.svg";

export default function DetailsScreen() {
  const { id } = useParams();
  const { book } = useBookDetails(id);
  const history = useHistory(book);

  const DescriptionContent = useMemo(() => {
    if (!book) {
      return null;
    }

    return (
      <Interweave
        allowList={["p", "br"]}
        content={book.volumeInfo.description}
      />
    );
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

  const onShareClick = async () => {
    const shareData = {
      title: book.volumeInfo.subtitle,
      text: book.volumeInfo.subtitle,
      url: book.accessInfo.webReaderLink,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error(err);
    }
  };

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
        <Description>{DescriptionContent}</Description>
      </ContentWrapper>

      <DetailsBottomBar.Container>
        <DetailsBottomBar.Item
          name="Read"
          icon={openBookIcon}
          href={book.accessInfo.webReaderLink}
        />
        <DetailsBottomBar.Divider />
        <DetailsBottomBar.Item
          name="Listen"
          icon={headphoneIcon}
          href={book.accessInfo.webReaderLink}
        />
        <DetailsBottomBar.Divider />
        <DetailsBottomBar.Item
          name="Share"
          icon={shareIcon}
          onClick={onShareClick}
        />
      </DetailsBottomBar.Container>
    </MainContainer>
  );
}
