import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoBack from '../components/GoBack';
import SegmentedButtons from '../components/SegmentedButtons';
import {BOOK_SHELVES} from '../components/SelectBookShelf';
import {BookShelves} from '../types';

const BookShelvesScreen = () => {
  const [selectedBookShelf, setSelectedBookShelf] = useState(BookShelves.Read);

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
