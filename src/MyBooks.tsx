import { MyBooksList } from "./components/MyBooksList"

export const MyBooks = () => {
    return (
        <>
            <main className='flex flex-row flex-grow'>
                <MyBooksList />
            </main>
        </>
    )
}