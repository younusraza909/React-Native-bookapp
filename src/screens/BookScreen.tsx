import {useRoute} from '@react-navigation/native';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import useBook from '../hooks/useBook';
import {ScrollView} from 'react-native-gesture-handler';
import GoBack from '../components/GoBack';
import BookItem from '../components/BookItem';

const BookScreen = () => {
  const route = useRoute();

  const {bookId} = route?.params;

  const {data, isFetching, error} = useBook(bookId);

  if (isFetching) return <ActivityIndicator color="#4ecdc4" />;

  if (error) return <Text>Error</Text>;

  const {
    title,
    authors,
    description,
    categories,
    publisher,
    publishedDate,
    previewLink,
  } = data!.volumeInfo;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        padding: 15,
        gap: 15,
      }}>
      <View style={styles.header}>
        <GoBack />
      </View>
      <BookItem {...data} isPressable={false} isDescription={false} />
    </ScrollView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292f36',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categories: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  category: {
    borderWidth: 1,
    borderColor: '#4ecdc4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 13,
    color: '#4ecdc4',
  },
  publisher: {
    fontSize: 15,
    fontWeight: '500',
  },
  heading: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4ecdc4',
    textTransform: 'capitalize',
  },
});
