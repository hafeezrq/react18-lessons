import Button from '../lesson10-buttons/components/Button';
import useCounter from '../hooks/use-counter';

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
