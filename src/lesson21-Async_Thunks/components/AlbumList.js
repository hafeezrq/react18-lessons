import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
} from '../../lesson19-RTK/store';

import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from '../../lesson10-buttons/components/Button';

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    console.log(results);
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map(album => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos.
        </ExpandablePanel>
      );
    });
  }
  return (
    <>
      <div>Albums for {user.name}</div>
      <Button onClick={handleAddAlbum}>+ Add Album</Button>
      <div>{content}</div>
    </>
  );
}

export default AlbumList;
