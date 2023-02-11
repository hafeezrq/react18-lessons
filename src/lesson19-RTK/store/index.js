import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

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
import { albumApi } from '../../lesson21-Async_Thunks/apis/albumApi';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,

    //RTK-2
    form: formReducer,
    cars: carsReducer,

    // Lesson21-async-thunks
    users: usersReducer,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(albumApi.middleware);
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

setupListeners(store.dispatch);

export * from '../../lesson21-Async_Thunks/store/thunks/fetchUsers';
export * from '../../lesson21-Async_Thunks/store/thunks/addUser';
export * from '../../lesson21-Async_Thunks/store/thunks/removeUser';
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from '../../lesson21-Async_Thunks/apis/albumApi';
