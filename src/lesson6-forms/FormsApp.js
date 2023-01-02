import { useState } from 'react';
import BookCreate from './BookCreate';

function FormsApp() {
  const [books, setBooks] = useState([]);

  const createBook = title => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default FormsApp;
