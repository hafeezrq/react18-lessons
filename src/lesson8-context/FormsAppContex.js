import { useEffect, useContext } from 'react';

import BookCreate from './BookCreate';
import BookList from './BookList';
import BookContext from './context/books';

function FormsAppContext() {
  const { fetchBooks } = useContext(BookContext);
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
