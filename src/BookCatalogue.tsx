import '@fontsource-variable/jost';
import { BookList } from './components/BookList';
import { Filter } from './components/Filter';

export const BookCatalogue = () => { 

  return (
    <>
      <main className='flex flex-col md:flex-row flex-grow'>
        <Filter />
        <BookList />
      </main>
    </>
  )
}

