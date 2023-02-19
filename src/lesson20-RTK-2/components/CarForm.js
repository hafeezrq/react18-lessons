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
      <h2 className='text-xl font-bold mb-2'>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-row justify-between items-center border-2 mb-8 py-4'>
          <div>
            <label className='text-lg font-semibold ml-2' htmlFor=''>
              Name:
            </label>
            <input
              className='border border-gray-300  p-2.5'
              type='text'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label className='text-lg font-semibold' htmlFor=''>
              Cost:
            </label>
            <input
              className='border border-gray-300 p-2.5'
              type='number'
              value={cost || ''}
              onChange={handleCostChange}
            />
          </div>
          <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg py-2.5 px-5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
