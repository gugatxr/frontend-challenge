import { useEffect, useCallback, useState, useMemo, useRef } from "react";
import api from "services/api";

const DEFAULT_PAGINATION_SIZE = 20;

export default function useBooks(search) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(0);
  const bookIds = useRef([]);

  console.log(books.length);
  /**
   * Google api return duplicate books, this function verify duplicates ids and
   * remove from array;
   */
  const removeDuplicatesIds = useCallback(function (bookList, isFirstPage) {
    return bookList.filter((book) => {
      if (isFirstPage) {
        bookIds.current.push(book.id);
        return true;
      }

      console.log(bookIds.current.includes(book.id));

      if (bookIds.current.includes(book.id)) {
        return false;
      }

      bookIds.current.push(book.id);
      return true;
    });
  }, []);

  const hasMore = useMemo(() => {
    return totalItems > DEFAULT_PAGINATION_SIZE * page;
  }, [totalItems, page]);

  useEffect(() => {
    if (!search) {
      return;
    }

    let timer;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fetchData(search);
    }, 200);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [search]);

  const fetchData = useCallback(async (searchTerm, startIndex = 0) => {
    setIsLoading(true);

    try {
      const response = await api.get(
        `volumes?q=${searchTerm}&printType=books&maxResults=${DEFAULT_PAGINATION_SIZE}&startIndex=${startIndex}`
      );

      const data = removeDuplicatesIds(response.data.items, startIndex === 0);

      setBooks((old) => (startIndex === 0 ? data : [...old, ...data]));

      setError(false);
      setTotalItems(response.data.totalItems);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadMore = useCallback(async () => {
    const currentPage = page + 1;

    setPage(currentPage);

    fetchData(search, currentPage * DEFAULT_PAGINATION_SIZE + 1);
  }, [search, fetchData, page]);

  return {
    books,
    isLoading,
    isError,
    loadMore,
    hasMore,
  };
}
