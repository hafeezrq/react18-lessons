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

  const renderedUsers = data.map(user => {
    return (
      <div key={user.id} className='mb-2 border rounded'>
        <div className='flex p-2 justify-betwenn items-center cursor-pointer'>
          {user.name}
        </div>
      </div>
    );
  });

  return <div>{renderedUsers}</div>;
}

export default UserList;
