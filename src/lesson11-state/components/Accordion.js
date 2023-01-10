import React, { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function Accordion({ items }) {
  const [expendedIndex, setExpendedIndex] = useState(-1);

  function handleClick(index) {
    if (expendedIndex === index) {
      setExpendedIndex(-1);
    } else {
      setExpendedIndex(index);
    }
  }

  const renderdItems = items.map((item, index) => {
    const isExpended = index === expendedIndex;

    const icon = (
      <span className='text-2xl'>
        {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className='flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer'
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
