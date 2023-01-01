const SearchBar = ({ onSubmit }) => {
  const handleClick = () => {
    onSubmit('Cars');
  };
  return (
    <div>
      <input />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default SearchBar;
