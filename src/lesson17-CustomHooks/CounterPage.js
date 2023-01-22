import { useState, useEffect } from 'react';

import Button from '../lesson10-buttons/components/Button';

function useCounter(initialCount) {
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const increment = () => {
    setCounter(counter + 1);
  };

  return {
    counter,
    increment,
  };
}

function CounterPage({ initialCount }) {
  const { counter, increment } = useCounter(initialCount);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Button primary onClick={increment}>
        Increment Count
      </Button>
    </div>
  );
}

export default CounterPage;
