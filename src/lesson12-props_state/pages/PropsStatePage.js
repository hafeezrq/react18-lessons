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
    <div>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default PropsStatePage;