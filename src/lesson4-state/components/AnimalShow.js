import { useState } from 'react';
import bird from '../images/bird.svg';
import cat from '../images/cat.svg';
import cow from '../images/cow.svg';
import dog from '../images/dog.svg';
import gator from '../images/gator.svg';
import heart from '../images/heart.svg';
import horse from '../images/horse.svg';

import './AnimalShow.css';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div
      className='relative border-1 border-gray-300 rounded m-2 shadow-lg bg-blue-100 p-2 w-1/4'
      onClick={handleClick}>
      <img className='animal h-52' src={svgMap[type]} alt={`A ${type}`} />
      <img
        className='absolute bottom-4 right-4'
        src={heart}
        alt='Heart'
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalShow;
