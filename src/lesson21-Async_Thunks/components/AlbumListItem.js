import { GoTrashcan } from 'react-icons/go';
import ExpandablePanel from './ExpandablePanel';
import { useRemoveAlbumMutation } from '../../lesson19-RTK/store';
import Button from '../../lesson10-buttons/components/Button';

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className='mr-2'
        loading={results.isLoading}
        onClick={handleRemoveAlbum}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos.
    </ExpandablePanel>
  );
}

export default AlbumListItem;
