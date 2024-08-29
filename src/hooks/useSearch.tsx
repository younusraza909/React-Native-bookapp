import {API_KEY} from '@env';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {IBook} from '../types';

const useSearch = (query: string) => {
  const searchBooks = async (): Promise<IBook[]> => {
    const response = await axios(
      'https://www.googleapis.com/books/v1/volumes',
      {
        params: {
          q: query,
          key: API_KEY,
        },
      },
    );

    return response.data.items;
  };

  return useQuery({
    queryKey: [query],
    queryFn: searchBooks,
    enabled: false,
  });
};

export default useSearch;
