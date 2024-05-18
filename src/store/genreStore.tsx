import { create } from "zustand";

interface GenreState {
    genre: string
    changeSelectedGenre: (selectedGenre: string) => void
}

export const useGenreStore = create<GenreState>()((set) => ({
    genre: "",
    changeSelectedGenre: (selectedGenre) => set({genre: selectedGenre}),
}))