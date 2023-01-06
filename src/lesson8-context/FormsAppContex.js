import { useEffect } from 'react';

import BookCreate from './BookCreate';
import BookList from './BookList';
import useBookContext from '../hooks/useBookContext';

function FormsAppContext() {
  const { fetchBooks } = useBookContext();
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default FormsAppContext;
