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
      <form
        onSubmit={handleSubmit}
        className='flex flex-row col-span-9 gap-4 mt-4'>
        <label
          htmlFor=''
          className='font-semibold text-lg w-1/3 text-right self-center '>
          Enter search term
        </label>
        <input
          value={term}
          onChange={handleChange}
          className='border-4 border-blue-300 w-1/2 h-12'
        />
      </form>
    </>
  );
};

export default SearchBar;
