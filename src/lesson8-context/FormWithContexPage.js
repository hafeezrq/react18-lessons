import classNames from 'classnames';
import { useEffect } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBookContext from './hooks/useBookContext';

function FormWithContextPage() {
  const { fetchBooks } = useBookContext();
  const classes = classNames('font-semibold text-blue-500');
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className='flex flex-col'>
      <header className='mb-8 bg-blue-200 h-16'>
        <h1 className='text-2xl font-bold text-center py-4'>
          Reading List (Context used to communicate between components)
        </h1>
      </header>
      <p className='mb-4'>
        This exapmle demonstrates how to use form in{' '}
        <span className={classes}>React</span> and controlled input element as
        well. The value of input element is controlled through{' '}
        <span className={classes}>state</span>. Instead of{' '}
        <span className={classes}>props, Context</span> is created and use to
        communicate info between components. An{' '}
        <span className='font-bold italic'>API server, called JSON Server</span>{' '}
        is setup to desing and develop REST API's, locally.
        <br />
        Code for this program can be find in the{' '}
        <spnan className='italic'>directory</spnan>{' '}
        <span className='font-semibold'>lesson8</span>.
      </p>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default FormWithContextPage;
