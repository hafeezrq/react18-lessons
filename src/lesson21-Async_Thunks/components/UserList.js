import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../store/thunks/fetchUsers';
import { addUser } from '../store/thunks/addUser';
import Skeleton from './Skeleton';
import Button from '../../lesson10-buttons/components/Button';
import { useThunk } from '../../hooks/use-thunk';
import UserListItem from './UserListItem';

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

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className='h-10 w-full' />;
  } else if (loadingUsersError) {
    content = <div>something went wrong.</div>;
  } else {
    content = data.map(user => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <>
      <div className='flex flex-row justify-between items-center m-3'>
        <h1 className='m-2 text-3xl font-semibold'>Users</h1>
        <Button
          loading={isCreatingUser}
          primary
          onClick={handleAddUser}
          className='font-bold'>
          + Add User
        </Button>
        {creatingUserError && 'Error creating user..'}
      </div>
      {content}
    </>
  );
}

export default UserList;
