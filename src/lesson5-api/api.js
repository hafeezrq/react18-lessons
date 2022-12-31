import axios from 'axios';
const searchImages = async term => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Wy_h0i5k1nsR3OYOK92h2txDp7eGzNJW21xyinAAkAo',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
