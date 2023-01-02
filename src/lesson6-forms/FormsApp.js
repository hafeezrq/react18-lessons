import { useState } from 'react';
import BookCreate from './BookCreate';

function FormsApp() {
  const [books, setBooks] = useState([]);

  const createBook = title => {
    console.log('Add book: ', title);
  };

  return (
    <div>
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default FormsApp;
