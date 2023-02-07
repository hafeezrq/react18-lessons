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
      <MoviePlayList />
      <hr />
      <SongsPlayList />
      <hr />
      <button onClick={() => handleResetClick()} className='button is-danger'>
        Reset Both Playlists
      </button>
    </div>
  );
}
