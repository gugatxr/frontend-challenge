import { useEffect, useCallback, useState, useMemo } from "react";
import api from "services/api";

const DEFAULT_PAGINATION_SIZE = 20;

export default function useBooks(search) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(0);

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

      setBooks((data) => {
        if (startIndex === 0) {
          return response.data.items;
        }

        return [...data, ...response.data.items];
      });

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
