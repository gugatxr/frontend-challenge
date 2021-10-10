import {useEffect, useCallback, useState} from 'react';
import api from 'services/api';

const DEFAULT_PAGINATION_SIZE = 10;

export default function useBooks(search){
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(true);
  const [totalItens, setTotalItens] = useState(0);

  useEffect(() => {
    if (!search) {
      return;
    }

    fetchData(search);
  }, [search]);

  const fetchData = useCallback(async (searchTerm) => {
    setIsLoading(true);
    try{
      const response = await api.get(`volumes?q=${searchTerm}&printType=books`);

      setBooks(response.data.items);
      setError(false);
      setTotalItens(response.data.totalItems);
    } catch (error) {
      console.error(error)
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    books,
    isLoading,
    isError,
  }

}
