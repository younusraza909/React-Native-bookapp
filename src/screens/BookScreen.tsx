import {RouteProp, useRoute} from '@react-navigation/native';
import {
  ActivityIndicator,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import useBook from '../hooks/useBook';
import {ScrollView} from 'react-native-gesture-handler';
import GoBack from '../components/GoBack';
import BookItem from '../components/BookItem';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import RenderHTML from 'react-native-render-html';
import {StackParamList} from '../types';
import SelectBookShelf from '../components/SelectBookShelf';
import BookSummary from '../components/BookSummary';

type BookScreenRouteProp = RouteProp<StackParamList, 'Book'>;
const BookScreen = () => {
  const route = useRoute<BookScreenRouteProp>();

  const {bookId} = route?.params;
  const {width} = useWindowDimensions();

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
        <SelectBookShelf bookId={bookId} />
      </View>
      <BookItem {...data} isPressable={false} isDescription={false} />

      <View style={styles.categories}>
        {categories &&
          categories.map((category, index) => (
            <Text style={styles.category} key={index}>
              {category}
            </Text>
          ))}
      </View>
      <Text style={styles.publisher}>
        Published by {publisher} on {moment(publishedDate).format('LL')}
      </Text>

      <Pressable
        style={styles.btn}
        onPress={async () => await Linking.openURL(previewLink)}>
        <Text style={styles.btnText}>view</Text>
        <Icon name="external-link" color="#4ecdc4" size={20} />
      </Pressable>
      <RenderHTML
        contentWidth={width}
        source={{
          html: `<section style="color: white;">${description}</section>`,
        }}
      />

      <BookSummary title={title} authors={authors} />
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
    color: '#fff',
  },
  heading: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4ecdc4',
    textTransform: 'capitalize',
  },
  btn: {
    borderWidth: 1,
    borderColor: '#4ecdc4',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#fff',
  },
});
