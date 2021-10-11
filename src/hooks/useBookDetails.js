import { useEffect, useCallback, useState } from "react";
import api from "services/api";

export default function useBookDetails(id) {
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchData(id);
  }, [id]);

  const fetchData = useCallback(async (id) => {
    setIsLoading(true);

    try {
      const response = await api.get(`volumes/${id}`);

      setBook(response.data);

      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    book,
    isLoading,
    isError,
  };
}
