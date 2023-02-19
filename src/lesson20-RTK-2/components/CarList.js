import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store/slices/carsSlice';

function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleDeleteCar = car => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div
        key={car.id}
        className={`panel ${bold && 'bold'} flex flex-row justify-between`}>
        <p className='text-lg font-semibold ml-2 px-5 py-2.5 mr-2 mb-2'>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleDeleteCar(car)}
          className='col-end-7 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
          Delete
        </button>
      </div>
    );
  });

  return <div>{renderedCars}</div>;
}

export default CarList;
