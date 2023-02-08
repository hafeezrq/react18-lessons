import { GoTrashcan } from 'react-icons/go';
import { useThunk } from '../../hooks/use-thunk';
import Button from '../../lesson10-buttons/components/Button';
import { removeUser } from '../store/thunks/removeUser';

function UserListItem({ user }) {
  const [doRemoveUser, isRemoving, removeUserError] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-betwenn items-center cursor-pointer'>
        <Button loading={isRemoving} onClick={handleClick}>
          <GoTrashcan />
        </Button>
        {removeUserError && <div>Error: In removing the user</div>}
        {user.name}
      </div>
    </div>
  );
}

export default UserListItem;
