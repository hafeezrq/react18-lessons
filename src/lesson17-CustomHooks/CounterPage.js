import Button from '../lesson10-buttons/components/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
  const { counter, increment } = useCounter(initialCount);
  return (
    <div className='flex flex-col items-center'>
      <header className='mb-8'>
        <h1 className='text-2xl font-semibold'>
          Demo Features: Create Custome Hooks using React Hooks
        </h1>
        <p>
          This program show how to create{' '}
          <span className='text-blue-500'>Custom</span> hooks and use them in
          app. This app shows a counter with default count 10 and a button to
          change the value of counter.
        </p>
        <p>
          Code of this program is in <span className='italic'>lesson17</span>{' '}
          directory.
        </p>
      </header>
      <h1 className='text-lg font-semibold p-4'>Counter: {counter}</h1>
      <Button primary onClick={increment}>
        Increment Count
      </Button>
    </div>
  );
}

export default CounterPage;
