import { useState } from 'react';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = option => {
    setIsOpen(false);
    console.log(option);
  };
  const renderedOptions = options.map(option => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  const handleClick = () => setIsOpen(!isOpen);
  return (
    <div>
      <h3 onClick={handleClick} className='font-bold cursor-pointer'>
        Select...
      </h3>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
