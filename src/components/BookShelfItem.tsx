import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IBookShelf} from '../types';
import useBook from '../hooks/useBook';
import BookItem from './BookItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useBookShelves from '../store';

const BookShelfItem = (props: IBookShelf) => {
  const {bookId} = props;
  const {data, isFetching, error} = useBook(bookId);
  const {removeBook} = useBookShelves();

  if (isFetching) return <ActivityIndicator color="#4ecdc4" />;
  if (error) return <Text>Error</Text>;

  if (data)
    return (
      <View style={styles.container}>
        <BookItem {...data} />
        <Pressable onPress={() => removeBook(bookId)}>
          <Icon name="delete" size={30} color="red" />
        </Pressable>
      </View>
    );
};

export default BookShelfItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});
