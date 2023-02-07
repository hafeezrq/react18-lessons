import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    arg => {
      setIsLoadingUsers(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch(err => setError(err))
        .finally(() => setIsLoadingUsers(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoadingUsers, error];
}
