import { GoTrashcan } from 'react-icons/go';
import { useThunk } from '../../hooks/use-thunk';
import Button from '../../lesson10-buttons/components/Button';
import { removeUser } from '../store/thunks/removeUser';
import ExpandablePanel from './ExpandablePanel';

function UserListItem({ user }) {
  const [doRemoveUser, isRemoving, removeUserError] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  const userTitle = (
    <>
      <Button loading={isRemoving} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {removeUserError && <div>Error: In removing the user</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel userTitle={userTitle}>Content!!!!</ExpandablePanel>;
}

export default UserListItem;
