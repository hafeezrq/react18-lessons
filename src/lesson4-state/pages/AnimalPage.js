import { useState } from 'react';
import AnimalShow from '../components/AnimalShow';
import classNames from 'classnames';

import './AnimalApp.css';

function getRandomAnimal() {
  const myAnimals = ['bird', 'cow', 'gator', 'horse', 'cat', 'dog'];
  return myAnimals[Math.floor(Math.random() * myAnimals.length)];
}

const AnimalPage = () => {
  const [animals, setAnimals] = useState([]);
  const classes = classNames('font-semibold text-blue-500');

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className='flex flex-col items-center m-4'>
      <header className='mb-4'>
        <h2 className='text-2xl font-bold '>
          Demo Features: State and useState Hook in React App
        </h2>
        <p className='mt-2'>
          This very simple program that demonstrate the use of{' '}
          <span className={classes}>State</span> and{' '}
          <span className={classes}>useState</span> hook in{' '}
          <span className={classes}>React</span> apps. When a component changes
          the state then whole app is re-rendered showing the latest state of
          the component or the App accordingly.
        </p>
        <p>
          Code for this demo is in the <span className='italic'>lesson-4</span>{' '}
          directory.
        </p>
      </header>
      <button
        className='bg-blue-300 border-green-500 rounded-lg p-2 w-1/4 text-lg font-semibold'
        onClick={handleClick}>
        Add Animal
      </button>
      <div className='flex flex-row justify-center flex-wrap'>
        {renderedAnimals}
      </div>
    </div>
  );
};
export default AnimalPage;
