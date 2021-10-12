import { useState } from "react";
import Section from "components/Section";
import DiscoverBookItem from "components/DiscoverBookItem";
import { Container, BigOvalCover } from "./styles";
import BookCoverHooked from "assets/BookCoverHooked.png";
import theOneThingBook from "assets/theOneThingBook.png";
import ovalPattern from "assets/ovalPattern.png";

const books = [
  {
    id: "dsz5AwAAQBAJ",
    title: "Hooked",
    author: "Nir Eyal",
    cover: BookCoverHooked,
    readers: "120+",
    active: true,
  },
  {
    id: "Gyd-AwAAQBAJ",
    title: "The One Thing",
    author: "Garry Keller",
    cover: theOneThingBook,
    readers: "90+",
    active: false,
  },
];

export default function ReviewsOfTheDay() {
  const [ref, setRef] = useState(null);

  return (
    <Section title="Discover new book" linkText="More">
      <BigOvalCover src={ovalPattern} />

      <Container horizontal={true} innerRef={(element) => setRef(element)}>
        {books.map((book) => (
          <DiscoverBookItem
            key={book.id}
            book={book}
            active={book.active}
            containerRef={ref}
          >
            {book.title}
          </DiscoverBookItem>
        ))}
      </Container>
    </Section>
  );
}
