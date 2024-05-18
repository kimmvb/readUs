import { useQuery } from "@tanstack/react-query";
import { BookItem, BookInterface, Book } from "./Book";
import { LoadingSpinner } from "./LoadingSpinner";
import { useGenreStore } from "../store/genreStore";
import { ButtonAdd } from "./ButtonAdd";
import { useMyBooksStore } from "../store/myBooksStore";

export const BookList = () => {

    const { genre } = useGenreStore((state) => ({
        genre: state.genre
    }));

    const {myBooks, addBook} = useMyBooksStore((state) => ({
        myBooks: state.myBooks,
        addBook: state.addBook,
    }))

    const handleAddBooks = (newBook: BookInterface) => {
        addBook(newBook);
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['books'],
        queryFn: () => {
            return fetch('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev/')
                .then((res) => res.json())
        }
    });

    if (isLoading) return <LoadingSpinner />;
    if (error) return <div>Error: {error.message}</div>;

    const books = genre && genre !== "Todas" ?
        data.default.library.filter((item: BookItem) => item.book.genre === genre) :
        data.default.library;

        console.log(myBooks);
    return (
        <section className="flex flex-wrap justify-evenly items-center md:items-start gap-5 md:gap-10 my-6 bg-[#F2EBE3]/65 w-full md:w-4/6">
            {
                books.map((item: BookItem) => (
                    <div className="flex flex-col items-center gap-y-5 w-[190px] h-[360px] bg-[#F2EBE3]/65">
                        <Book title={item.book.title} cover={item.book.cover} ISBN={item.book.ISBN} />
                        <ButtonAdd 
                        addFunction={()=> handleAddBooks(item.book)}
                        ISBN={item.book.ISBN}/>

                    </div>
                ))}
        </section>
    )
}