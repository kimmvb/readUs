export interface BookInterface {
    title: string;
    pages?: number;
    genre?: string;
    cover: string;
    synopsis?: string;
    year?: number;
    ISBN: string;
    author?: {
        name: string;
        otherBooks: string[]
    }
}

export interface BookItem {
    book: BookInterface
}

export const Book: React.FC<BookInterface> = ({ title, cover, ISBN }) => {
    return (
        <div className="flex flex-col items-center gap-y-5 w-[190px] h-[360px] bg-[#F2EBE3]/65" key={ISBN}>
            <img src={cover} alt={`Cover from ${title}`} className="w-40 h-64 rounded"></img>
            <h2 className="text-black truncate text-ellipsis w-40 text-center text-lg">{title}</h2>
        </div>
    )
}