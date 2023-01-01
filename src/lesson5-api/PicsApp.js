import SearchBar from './components/SearchBar';

const PicsApp = () => {
  const handleSubmit = term => {
    console.log(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default PicsApp;
