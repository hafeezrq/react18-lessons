import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/thunks/fetchUsers';
import Skeleton from './Skeleton';

function UserList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector(state => {
    return state.users;
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <Skeleton times={6} className='h-10 w-full' />
      </div>
    );
  }
  if (error) {
    return <div>something went wrong.</div>;
  }

  return <div>{data.length}</div>;
}

export default UserList;
