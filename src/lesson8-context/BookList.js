import { useContext } from 'react';

import BookContext from './context/books';
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  const value = useContext(BookContext);
  const renderedBooks = books.map(book => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return (
    <div className='book-list'>
      {value} {renderedBooks}
    </div>
  );
}

export default BookList;
