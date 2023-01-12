import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = option => {
    setIsOpen(false);
    onChange(option);
  };
  const renderedOptions = options.map(option => {
    return (
      <div
        className='hover: bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}>
        {option.label}
      </div>
    );
  });

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className='w-48 relative'>
      <div
        onClick={handleClick}
        className='flex justify-between center cursor-pointer boreder rounded p-3 shadow bg-white w-full font-bold'>
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </div>
      {isOpen && (
        <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
