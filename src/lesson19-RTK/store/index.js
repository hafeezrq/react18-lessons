import { configureStore } from '@reduxjs/toolkit';

import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { reset } from './actions';

// RTK-2
import {
  changeSearchTerm,
  addCar,
  removeCar,
  carsReducer,
} from '../../lesson20-RTK-2/store/slices/carsSlice';
import {
  changeName,
  changeCost,
  formReducer,
} from '../../lesson20-RTK-2/store/slices/formSlice';

// Lesson21- async thunks
import { usersReducer } from '../../lesson21-Async_Thunks/store/slices/usersSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,

    //RTK-2
    form: formReducer,
    cars: carsReducer,

    // Lesson21-async-thunks
    users: usersReducer,
  },
});

export {
  store,
  reset,
  addSong,
  removeSong,
  addMovie,
  removeMovie,
  changeSearchTerm,
  addCar,
  removeCar,
  changeName,
  changeCost,
};
// RTK-2
// export { changeSearchTerm, addCar, removeCar, changeName, changeCost };
