import { useGenreStore } from "../store/genreStore"

const genres = [
    { name: "Fantasía", id: 1 },
    { name: "Ciencia ficción", id: 2 },
    { name: "Zombies", id: 3 },
    { name: "Terror", id: 4 },
    { name: "Todas", id: 5},
]

export const Filter = () => {
    const {changeSelectedGenre} = useGenreStore((state) => ({
        changeSelectedGenre: state.changeSelectedGenre
    }));

    const handleGenreClick = (genreName: string) => {
        changeSelectedGenre(genreName);
      };

    return (
        <aside className="text-black border solid border-r-gray-900/30 w-full md:w-2/6 md:pl-10 pt-6 flex justify-center md:block">
            <div className="bg-white flex flex-col md:items-start rounded w-7/12 md:w-10/12 pb-2">
                <h2 className="text-lg font-semibold py-3 pl-2">Géneros</h2>
                {genres.map((genre) =>
                    <div className="bg-[#A3CAE7] text-gray-900 w-full pl-2 py-1 cursor-pointer hover:bg-mustard transition"
                        key={genre.id} onClick={() => handleGenreClick(genre.name)}>
                        {genre.name}
                    </div>
                )}
            </div>
        </aside>
    )
}