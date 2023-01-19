import { useEffect } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBookContext from './hooks/useBookContext';

function FormWithContextPage() {
  const { fetchBooks } = useBookContext();
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div>
      <h1>Reading List (Context used to communicate between components)</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default FormWithContextPage;
