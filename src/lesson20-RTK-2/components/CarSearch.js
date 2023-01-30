import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store/slices/carsSlice';

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => {
    return state.cars.searhTerm;
  });

  const handleSearchTermChange = event => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div>
      <h3>My Cars</h3>
      <div>
        <label htmlFor=''>Search</label>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
