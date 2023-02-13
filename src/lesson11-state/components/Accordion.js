import React, { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function Accordion({ items }) {
  const [expendedIndex, setExpendedIndex] = useState(-1);

  function handleClick(index) {
    // Just to address a very very rare bug, in this sort of
    // state update.
    setExpendedIndex(currentExpendedIndex => {
      if (currentExpendedIndex === index) {
        return -1;
      } else {
        return index;
      }
    });
    /* if (expendedIndex === index) {
      setExpendedIndex(-1);
    } else {
      setExpendedIndex(index);
    } */
  }

  const renderdItems = items.map((item, index) => {
    const isExpended = index === expendedIndex;

    const icon = (
      <span className='text-2xl'>
        {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id} className='bg-white border-b-2'>
        <div
          className='flex p-3 items-center justify-between cursor-pointer text-xl font-semibold'
          onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>

        {isExpended && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });
  return <div className='border-x border-t rounded'>{renderdItems}</div>;
}

export default Accordion;
