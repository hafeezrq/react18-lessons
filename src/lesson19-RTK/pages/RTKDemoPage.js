import { useDispatch } from 'react-redux';

import MoviePlayList from '../components/MoviePlayList';
import SongsPlayList from '../components/SongsPlayList';
import { reset } from '../store';

import 'bulma/css/bulma.css';

import '../styles.css';
import '../store';

export default function RTKDemoPage() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className='container mx-auto px-8'>
      <header>
        <h1 className='is-size-4 has-text-weight-medium	'>
          Demo Features: Redux Toolkit(RTK)
        </h1>
        <p>
          This program demonstrate the use of{' '}
          <span className='has-text-info	has-text-weight-medium'>
            Redux Toolkit (RTK)
          </span>
          . Concepts like{' '}
          <span className='has-text-weight-medium'>
            Store, Slice, action, and reducers
          </span>
          .
        </p>
        <p>
          Code for this program is in the directory{' '}
          <span className='is-italic'>lesson19</span>.<br /> Note: this program
          share the store with next two following examples.
        </p>
      </header>
      <MoviePlayList />
      <hr />
      <SongsPlayList />
      <hr />
      <button
        onClick={() => handleResetClick()}
        className='button is-danger ml-5'>
        Reset Both Playlists
      </button>
    </div>
  );
}
