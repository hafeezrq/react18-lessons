import { useState, useEffect } from 'react';

import Button from '../lesson10-buttons/components/Button';

function CounterPage({ initialCount }) {
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Button primary onClick={handleClick}>
        Increment Count
      </Button>
    </div>
  );
}

export default CounterPage;
