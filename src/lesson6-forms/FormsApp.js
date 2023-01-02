import { useState } from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';

function FormsApp() {
  const [books, setBooks] = useState([]);

  const createBook = title => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = id => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default FormsApp;
