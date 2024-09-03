import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import GoBack from '../components/GoBack';
import SegmentedButtons from '../components/SegmentedButtons';
import {BOOK_SHELVES} from '../components/SelectBookShelf';
import {BookShelves} from '../types';
import useBookShelves from '../store';
import BookShelfItem from '../components/BookShelfItem';
import Divider from '../components/Divider';

const BookShelvesScreen = () => {
  const [selectedBookShelf, setSelectedBookShelf] = useState(BookShelves.Read);

  const {books} = useBookShelves();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <GoBack />
        <SegmentedButtons
          buttons={BOOK_SHELVES}
          value={selectedBookShelf}
          setValue={setSelectedBookShelf}
        />
      </View>

      <FlatList
        data={books.filter(book => book.bookShelfId === selectedBookShelf)}
        renderItem={({item}) => <BookShelfItem {...item} />}
        keyExtractor={item => item.bookId}
        contentContainerStyle={{
          padding: 15,
          gap: 5,
        }}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export default BookShelvesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
  topContainer: {
    padding: 20,
    paddingHorizontal: 5,
    gap: 15,
    maxWidth: 1200,
  },
});
