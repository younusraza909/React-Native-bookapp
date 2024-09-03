import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {BookShelves} from '../types';
import useBookShelves from '../store';

export const BOOK_SHELVES = [
  {label: 'Want to Read', value: BookShelves.WantToRead},
  {label: 'Read', value: BookShelves.Read},
  {label: 'Currently Reading', value: BookShelves.CurrentlyReading},
];

const TickIcon = () => <Icon name="check" size={25} color="#4ecdc4" />;

interface ISelectBookShelf {
  bookId: string;
}

const SelectBookShelf = (props: ISelectBookShelf) => {
  const {bookId} = props;
  const {addBook, books, updateBook} = useBookShelves();
  const book = books.find(item => item.bookId === bookId);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(book?.bookShelfId ?? null);
  const [items, setItems] = useState(BOOK_SHELVES);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={bookShelveId =>
        book
          ? updateBook(bookId, bookShelveId as BookShelves)
          : addBook(bookId, bookShelveId as BookShelves)
      }
      listMode="SCROLLVIEW"
      containerStyle={styles.container}
      placeholder="Add to Bookshelf"
      TickIconComponent={TickIcon}
    />
  );
};

export default SelectBookShelf;

const styles = StyleSheet.create({
  container: {
    width: 300,
    cursor: 'pointer',
  },
});
