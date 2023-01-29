import { useDispatch, useSelector } from 'react-redux';
import { changeCost, changeName } from '../../lesson19-RTK/store';
import { addCar } from '../../lesson19-RTK/store';

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector(state => {
    return { name: state.form.name, cost: state.form.cost };
  });

  const handleNameChange = event => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = event => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div>
      <h4>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='inline-grid gap-4 grid-cols-3'>
          <div>
            <label className='text-lg font-semibold' htmlFor=''>
              Name
            </label>
            <input
              className='ml-2 border border-gray-300 px-5 py-2.5 mr-2 mb-2'
              type='text'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label className='text-lg font-semibold' htmlFor=''>
              Cost
            </label>
            <input
              className='ml-2 border border-gray-300 px-5 py-2.5 mr-2 mb-2'
              type='number'
              value={cost || ''}
              onChange={handleCostChange}
            />
          </div>
          <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
