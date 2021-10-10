import useBooks from "hooks/useBooks";
import BookItem from "components/BookItem";
import BookList from "components/BookList";
import { LoadMoreButton } from "./SearchStyles";

export default function Search({ search }) {
  const { books, loadMore, hasMore } = useBooks(search);

  return (
    <div>
      <BookList>
        {books.map((book) => (
          <BookItem
            key={book.id}
            link={{
              pathname: `/details/${book.id}`,
              state: book,
            }}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors ?? ""}
            coverImage={book.volumeInfo?.imageLinks?.smallThumbnail}
          />
        ))}
      </BookList>

      {hasMore && <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>}
    </div>
  );
}
