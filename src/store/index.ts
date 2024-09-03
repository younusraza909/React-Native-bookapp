import {create} from 'zustand';
import {BookShelves, IBookShelf} from '../types';

type Store = {
  books: IBookShelf[];
  addBook: (bookId: string, bookShelfId: BookShelves) => void;
  updateBook: (bookId: string, bookShelfId: BookShelves) => void;
  removeBook: (bookId: string) => void;
};

const useBookShelves = create<Store>()(set => ({
  books: [],
  addBook: (bookId, bookShelfId) =>
    set(state => ({books: [...state.books, {bookId, bookShelfId}]})),
  updateBook: (bookId, bookShelfId) => {
    set(state => {
      const updatedBooks = state.books.map(book => {
        if (book.bookId === bookId) {
          return {
            ...book,
            bookShelfId: bookShelfId,
          };
        }
        return book;
      });
      return {books: updatedBooks};
    });
  },
  removeBook: bookId => {
    set(state => {
      const updatedBooks = state.books.filter(book => book.bookId !== bookId);
      return {books: updatedBooks};
    });
  },
}));

export default useBookShelves;
