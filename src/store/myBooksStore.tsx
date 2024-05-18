import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BookInterface } from "../components/Book";

interface MyBooksState {
    myBooks: BookInterface[]
    addBook: (addedBook: BookInterface) => void
    removeBook: (removedBook: BookInterface) => void
}

   export const useMyBooksStore = create<MyBooksState>()(
    persist(
        (set, get) => ({
            myBooks: [],
            addBook: (addedBook) => {
                const { myBooks } = get();
                const exists = myBooks.some(book => book.ISBN === addedBook.ISBN);
                if (!exists) {
                    set({ myBooks: [...myBooks, addedBook] });
                }
            },
            removeBook: (removedBook) => {
                set(state => ({
                    myBooks: state.myBooks.filter(book => book.ISBN !== removedBook.ISBN)
                }));
            },
        }),
        {
            name: "my-books-storage", 
        }
    )
);