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
        className='hover: bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}>
        {option.label}
      </div>
    );
  });

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div ref={divElementRef} className='w-48 relative'>
      <Panel
        onClick={handleClick}
        className='flex justify-between center cursor-pointer font-bold'>
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full '>{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
