import { useState } from 'react';
import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const PicsPage = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async term => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className='container mx-auto px-4 grid grid-cols-6'>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default PicsPage;
