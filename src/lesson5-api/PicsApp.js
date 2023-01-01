import searchImages from './api';
import SearchBar from './components/SearchBar';

const PicsApp = () => {
  const handleSubmit = term => {
    searchImages(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default PicsApp;
