import CarForm from '../components/CarForm';
import CarList from '../components/CarList';
import CarSearch from '../components/CarSearch';
import CarValue from '../components/CarValue';

function RTKDemo2Page() {
  return (
    <div className='container mx-auto'>
      <header className='mb-8'>
        <h1 className='text-2xl font-semibold'>Demo Feature: RTK Query </h1>
        <p>
          This porgram demo shows the use of RTK Query, powerful data fetching
          and caching tool for React apps.
        </p>
        <p>
          The code for this program is in lesson20 directory, and shares the
          store with privious expamle's store.
        </p>
      </header>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default RTKDemo2Page;
