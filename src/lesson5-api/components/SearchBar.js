const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('I am trying to send info to parent!');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input />
      </form>
    </div>
  );
};

export default SearchBar;
