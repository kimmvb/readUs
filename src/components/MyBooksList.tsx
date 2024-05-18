import { useMyBooksStore } from "../store/myBooksStore"
import { Book, BookInterface } from "./Book";
import { ButtonRemove } from "./ButtonRemove";
import { LinkNav } from "./LinkNav";


export const MyBooksList = () => {
    const { myBooks, removeBook } = useMyBooksStore((state) => ({
        myBooks: state.myBooks,
        removeBook: state.removeBook,
    }))

    const handleRemoveBooks = (removedBook: BookInterface) => {
        removeBook(removedBook);
    }

    return (
        <section className="flex flex-wrap justify-evenly gap-10 my-6 bg-[#F2EBE3]/65 w-full">
            {myBooks.length === 0 ? (
                <div className='text-black text-4xl m-8 flex justify-center items-center flex-col flex-grow gap-y-8'>
                    <p>No tienes ningún libro añadido... aún</p>
                    <LinkNav name="Volver a catálogo" href="/" />
                </div>
            ) : (
                myBooks.map((book) => (
                    <div key={book.ISBN}>
                        <Book title={book.title} cover={book.cover} ISBN={book.ISBN} />
                        <ButtonRemove addFunction={() => handleRemoveBooks(book)} />
                    </div>
                ))
            )}
        </section>
    )
}