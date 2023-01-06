import { useContext } from 'react';
import BookContext from '../lesson8-context/context/books';

function useBookContext() {
  return useContext(BookContext);
}

export default useBookContext;
