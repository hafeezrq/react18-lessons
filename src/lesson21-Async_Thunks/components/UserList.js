import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/thunks/fetchUsers';
import { addUser } from '../store/thunks/addUser';
import Skeleton from './Skeleton';
import Button from '../../lesson10-buttons/components/Button';

function UserList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector(state => {
    return state.users;
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(addUser());
  };

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

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl '>Users</h1>
        <Button primary onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      {renderedUsers}
    </div>
  );
}

export default UserList;
