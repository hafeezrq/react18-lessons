import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../store/thunks/fetchUsers';
import { addUser } from '../store/thunks/addUser';
import Skeleton from './Skeleton';
import Button from '../../lesson10-buttons/components/Button';
import { useThunk } from '../../hooks/use-thunk';

function UserList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector(state => {
    return state.users;
  });
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doCreateUser();
  };

  if (isLoadingUsers) {
    return (
      <div>
        <Skeleton times={6} className='h-10 w-full' />
      </div>
    );
  }
  if (loadingUsersError) {
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
        <h1 className='m-2 text-3xl font-semibold'>Users</h1>
        {isCreatingUser ? (
          'Creating user...'
        ) : (
          <Button primary onClick={handleAddUser} className='font-bold'>
            + Add User
          </Button>
        )}
        {creatingUserError && 'Error creating user..'}
      </div>
      {renderedUsers}
    </div>
  );
}

export default UserList;
