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
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Enter search term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
