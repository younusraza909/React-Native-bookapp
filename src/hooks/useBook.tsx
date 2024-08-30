import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {IBook} from '../types';
import {API_KEY} from '@env';

const useBook = (bookId: string) => {
  const getBook = async (): Promise<IBook> => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}`,
      {
        params: {
          key: API_KEY,
        },
      },
    );

    return response.data;
  };

  return useQuery({
    queryKey: [bookId],
    queryFn: getBook,
  });
};

export default useBook;
