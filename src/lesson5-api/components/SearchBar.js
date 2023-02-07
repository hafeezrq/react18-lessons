import { useState } from 'react';

import './SearchBar.css';
const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = event => {
    setTerm(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-row col-span-6 gap-4'>
        <label htmlFor='' className='font-semibold text-lg '>
          Enter search term
        </label>
        <input value={term} onChange={handleChange} className='border-4' />
      </form>
    </>
  );
};

export default SearchBar;
