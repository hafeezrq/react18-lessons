import { useContext } from 'react';

import BookContext from './context/books';
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BookContext);
  const renderedBooks = books.map(book => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return (
    <div className='book-list'>
      {count}
      <button onClick={incrementCount}>click</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
