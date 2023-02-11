import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from '../../lesson19-RTK/store';

import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from '../../lesson10-buttons/components/Button';
import AlbumListItem from './AlbumListItem';

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleAddAlbum = () => {
    console.log(results);
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton className='h-5 w-3/4 mx-auto' times={3} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map(album => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }
  return (
    <>
      <div className='flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'>Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>

      <div>{content}</div>
    </>
  );
}

export default AlbumList;
