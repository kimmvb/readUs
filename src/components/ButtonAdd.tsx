import { useState } from "react";
import { useMyBooksStore } from "../store/myBooksStore";
import addIcon from "../icons/add.svg";
import checkIcon from "../icons/check.svg";

interface Props {
    addFunction: () => void
    ISBN: string
}

export const ButtonAdd: React.FC<Props> = ({ addFunction, ISBN }) => {
    const [isAdded, setIsAdded] = useState<boolean>(false);

    const isBookAdded = useMyBooksStore(state => state.myBooks.some((book) => book.ISBN === ISBN));
    
    const handleAddBook = () => {
        addFunction();
        setIsAdded(true);
    };

    return (
        <button className={` text-soft-gray flex flex-row gap-x-2 items-center justify-between rounded-md py-1 px-4 drop-shadow-lg text-sm hover:bg-[#A3CAE7] transition ${isAdded || isBookAdded ? "bg-[#A3CAE7]": "bg-mustard"}`} 
        disabled={isAdded || isBookAdded} 
        onClick={handleAddBook}>
            {isAdded || isBookAdded ? "Añadido a mis libros" : "Añadir a mis libros"} 
        <img src={isAdded || isBookAdded ? checkIcon : addIcon} 
        alt={`${isAdded || isBookAdded ? "Check" : "Add"} icon`} />
        </button>
    )
}