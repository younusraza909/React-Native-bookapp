import {ActivityIndicator, Text, View} from 'react-native';
import {IBookShelf} from '../types';
import useBook from '../hooks/useBook';
import BookItem from './BookItem';

const BookShelfItem = (props: IBookShelf) => {
  const {bookId} = props;
  const {data, isFetching, error} = useBook(bookId);

  if (isFetching) return <ActivityIndicator color="#4ecdc4" />;
  if (error) return <Text>Error</Text>;

  if (data) return <BookItem {...data} />;
};

export default BookShelfItem;
