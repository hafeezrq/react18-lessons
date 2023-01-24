import { useState } from 'react';

import Panel from '../../lesson12-props_state/components/Panel';
import Button from '../../lesson10-buttons/components/Button';

function Counter2({ initialCount }) {
  const [counter, setCounter] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const handleChange = event => {
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value);
  };

  const handleSubmit = () => {
    setCounter(counter + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Counter: {counter}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Add alot</label>
        <input
          className='m-3 p-1 bg-gray-50 border border-gray-300'
          type='number'
          value={valueToAdd || ''}
          onChange={handleChange}
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default Counter2;
