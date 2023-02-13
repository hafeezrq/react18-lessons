import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElementRef = useRef();

  useEffect(() => {
    const handler = event => {
      if (!divElementRef.current) {
        return;
      }
      if (!divElementRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleOptionClick = option => {
    setIsOpen(false);
    onChange(option);
  };
  const renderedOptions = options.map(option => {
    return (
      <div
        className='hover: bg-sky-50 rounded cursor-pointer pl-8 mb-2 text-xl font-semibold'
        onClick={() => handleOptionClick(option)}
        key={option.value}>
        {option.label}
      </div>
    );
  });

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div ref={divElementRef} className='relative w-1/2 left-1/4'>
      <Panel
        onClick={handleClick}
        className='flex justify-between items-center cursor-pointer text-2xl font-bold'>
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
