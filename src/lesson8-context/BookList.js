import BookShow from './BookShow';
import useBookContext from '../hooks/useBookContext';

function BookList() {
  const { books } = useBookContext();
  const renderedBooks = books.map(book => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;
