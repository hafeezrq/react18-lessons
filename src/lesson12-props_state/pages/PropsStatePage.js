import { useState } from 'react';

import Dropdown from '../components/Dropdown';

function PropsStatePage() {
  const [selection, setSelection] = useState(null);

  const handleSelection = option => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];
  return (
    <div className='container mx-auto w-1/2 flex flex-col content-center pl-4'>
      <header>
        <h1 className='text-2xl font-semibold'>
          Demo Features: Props, State, Hooks useState useEffect and useRef{' '}
        </h1>
        <p>
          This is very simple program to show how to use props, state and hooks
          in a React app.
        </p>
        <p>
          Code for this program is in directory{' '}
          <span className='italic'>lesson12</span>.
        </p>
      </header>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default PropsStatePage;
