import { useState, useEffect } from 'react';

import axios from 'axios';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import classNames from 'classnames';

function FormsAPIPage() {
  const [books, setBooks] = useState([]);
  const classes = classNames('font-semibold text-blue-500');

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async title => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async id => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className='flex flex-col'>
      <header className='mb-8 bg-blue-200 h-16'>
        <h1 className='text-2xl font-bold text-center py-4'>Reading List</h1>
      </header>
      <p className='mb-2'>
        This examle demonstrates how to use form in{' '}
        <span className={classes}>React</span> and controlled input element as
        well. The value of input element is controlled through{' '}
        <span className={classes}>state</span>. Also{' '}
        <span className={classes}>props, event handlers</span> are used.
        <br />
        Code for this program can be find in the{' '}
        <spnan className='italic'>directory</spnan>{' '}
        <span className='font-semibold'>lesson6_7</span>.
      </p>
      <BookCreate createBook={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default FormsAPIPage;
