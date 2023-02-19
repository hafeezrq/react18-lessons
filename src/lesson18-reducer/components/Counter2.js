// import { useState } from 'react';
import { useReducer } from 'react';

import Panel from '../../lesson12-props_state/components/Panel';
import Button from '../../lesson10-buttons/components/Button';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const VALUE_TO_ADD = 'ValueToAdd';
const ON_SUBMIT = 'submit';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ON_SUBMIT:
      return {
        ...state,
        counter: state.counter + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      return state;
  }
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
      type: INCREMENT,
    });
  };

  const decrement = () => {
    // setCounter(counter - 1);
    dispatch({
      type: DECREMENT,
    });
  };

  const handleChange = event => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // setCounter(counter + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ON_SUBMIT,
    });
  };

  return (
    <>
      <header className='ml-2'>
        <h1 className='text-2xl font-semibold'>
          Demo Feature(s): Use of Hook useReducer
        </h1>
        <p>
          This program uses the{' '}
          <span className='text-blue-500 font-medium'>useReducer</span> hook to
          make change and manage the state of the component, instead of
          useState. useReducer can handle multiple related state's part while
          useState can handle one at a time. The concepts of{' '}
          <span className='text-blue-500 font-medium'>
            reducer, dispatch, action
          </span>{' '}
          are domonstrated.
        </p>
        <p>
          The code for this program is in the{' '}
          <span className='italic'>lesson17</span> directory.
        </p>
      </header>
      <Panel className='m-3 w-2/3 mx-auto mt-4'>
        <div className='flex flex-row space-x-4'>
          <Button primary onClick={increment}>
            Increment(1)
          </Button>
          <Button warning className='' onClick={decrement}>
            Decrement(1)
          </Button>
          <h1 className='text-lg font-semibold'>
            Counter(State): {state.counter}
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label className='font-semibold'>Add Number:</label>
          <input
            className='m-3 p-1 bg-gray-50 border border-gray-300'
            type='number'
            value={state.valueToAdd || ''}
            onChange={handleChange}
          />
          <Button success>Add it</Button>
        </form>
      </Panel>
    </>
  );
}

export default Counter2;
