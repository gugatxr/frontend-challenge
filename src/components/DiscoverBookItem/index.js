import { useState } from "react";
import {
  Container,
  Title,
  Author,
  Footer,
  ReadsCounter,
  ReadNowLink,
  ReadsCounterIcon,
  ContentColumn,
  CoverColumn,
  BigOvalCover,
} from "./styles";
import chartIcon from "assets/chartIcon.svg";
import CoverImage from "./CoverImage";
import ovalPattern from "assets/ovalPattern.png";
import useIntersection from "hooks/useIntersection";

export default function DiscoverBookItem({ book, containerRef }) {
  const [ref, setRef] = useState(null);
  const active = useIntersection(ref, "", 0.5, containerRef);

  return (
    <Container
      active={active}
      ref={(element) => {
        setRef(element);
      }}
    >
      <ContentColumn>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
        {active && <BigOvalCover src={ovalPattern} />}
        <Footer>
          <ReadsCounterIcon src={chartIcon} />
          <ReadsCounter>{book.readers}</ReadsCounter>
          <ReadNowLink to={`/details/${book.id}`}>Read Now</ReadNowLink>
        </Footer>
      </ContentColumn>
      <CoverColumn>
        <CoverImage
          coverImage={book.cover}
          alt={`Book ${book.title} by ${book.author}`}
        />
      </CoverColumn>
    </Container>
  );
}
