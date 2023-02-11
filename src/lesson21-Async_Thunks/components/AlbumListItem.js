import ExpandablePanel from './ExpandablePanel';

function AlbumListItem({ album }) {
  const header = <div>{album.title}</div>;
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos.
    </ExpandablePanel>
  );
}

export default AlbumListItem;
