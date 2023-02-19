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
    <div className='flex flex-row justify-between items-center py-2 border'>
      <h3 className='text-xl font-semibold'>My Cars</h3>
      <div>
        <label className='text-xl font-semibold mr-1' htmlFor=''>
          Search:
        </label>
        <input
          className='p-2 mr-2 border'
          type='text'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
