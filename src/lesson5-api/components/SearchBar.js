import { useState } from 'react';
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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
