import { useState } from 'react';
const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit('cars from child');
  };
  const handleChange = event => {
    console.log(event.target.value);
    setTerm(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
