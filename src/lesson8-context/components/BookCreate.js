import { useState } from 'react';
import Button from '../../lesson10-buttons/components/Button';
import useBookContext from '../hooks/useBookContext';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useBookContext();
  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };
  return (
    <div className='bg-green-300 p-4 mb-4'>
      <h3 className='text-lg font-bold'>Add a book</h3>
      <form className='flex flex-row w-3/4 p-4' onSubmit={handleSubmit}>
        <label className='mr-2 font-semibold'>Title</label>
        <input
          className='pl-2 mr-4 border-2 rounded-md border-slate-300 grow'
          type='text'
          value={title}
          onChange={handleChange}
        />
        <Button primary rounded>
          Create
        </Button>
      </form>
    </div>
  );
}

export default BookCreate;
