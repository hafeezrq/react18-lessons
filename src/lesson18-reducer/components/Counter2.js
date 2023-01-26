// import { useState } from 'react';
import { useReducer } from 'react';

import Panel from '../../lesson12-props_state/components/Panel';
import Button from '../../lesson10-buttons/components/Button';

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'ValueToAdd') {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  return state;
};

function Counter2({ initialCount }) {
  // const [counter, setCounter] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  // Instead we use useReducer hook.
  const [state, dispatch] = useReducer(reducer, {
    counter: initialCount,
    valueToAdd: 0,
  });
  console.log(state);
  const increment = () => {
    // setCounter(counter + 1);
    dispatch({
      type: 'increment',
    });
  };

  const decrement = () => {
    // setCounter(counter - 1);
  };

  const handleChange = event => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: 'ValueToAdd',
      payload: value,
    });
  };

  const handleSubmit = () => {
    // setCounter(counter + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Counter: {state.counter}</h1>
      <div className='flex flex-row space-x-4'>
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button warning className='' onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Add alot</label>
        <input
          className='m-3 p-1 bg-gray-50 border border-gray-300'
          type='number'
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <Button success>Add it</Button>
      </form>
    </Panel>
  );
}

export default Counter2;
