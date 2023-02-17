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
      <header className='col-span-6 mb-4'>
        <h2 className='text-2xl font-bold'>
          Demo Features: Use of API in React
        </h2>
        <p>
          In this simple example axio library for react is used to make asyn
          call to a sever over the internet. This is also a show case for the
          features like:
          <ul className='ml-4 text-lg font-semibold'>
            <li>Props</li>
            <li>State</li>
            <li>useState</li>
            <li>Form</li>
            <li>Input</li>
          </ul>
        </p>
        <p>Code for this example is in the directory lesson5.</p>
      </header>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default PicsPage;
