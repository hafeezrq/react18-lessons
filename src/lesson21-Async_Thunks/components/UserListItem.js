import { GoTrashcan } from 'react-icons/go';
import { useThunk } from '../../hooks/use-thunk';
import Button from '../../lesson10-buttons/components/Button';
import { removeUser } from '../store/thunks/removeUser';

import AlbumList from './AlbumList';
import ExpandablePanel from './ExpandablePanel';

function UserListItem({ user }) {
  const [doRemoveUser, isRemoving, removeUserError] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <Button loading={isRemoving} onClick={handleClick} className='mr-4'>
        <GoTrashcan />
      </Button>
      {removeUserError && <div>Error: In removing the user</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}

export default UserListItem;
