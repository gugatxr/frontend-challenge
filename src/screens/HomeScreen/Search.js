import useBooks from "hooks/useBooks";
import BookItem from "components/BookItem";
import BookList from "components/BookList";

export default function Search({ search }) {
  const { books } = useBooks(search);

  return (
    <BookList>
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors ?? ""}
          coverImage={book.volumeInfo?.imageLinks?.smallThumbnail}
        />
      ))}
    </BookList>
  );
}
