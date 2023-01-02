import { useState } from 'react';
import AnimalShow from './AnimalShow';

import './AnimalApp.css';

function getRandomAnimal() {
  const myAnimals = ['bird', 'cow', 'gator', 'horse', 'cat', 'dog'];
  return myAnimals[Math.floor(Math.random() * myAnimals.length)];
}

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className='animal-app'>
      <button className='animal-show' onClick={handleClick}>
        Add Animal
      </button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
};
export default App;
