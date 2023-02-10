import { useFetchAlbumsQuery } from '../../lesson19-RTK/store';

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  console.log(data, error, isLoading);
  return <div>Album List for: {user.name}</div>;
}

export default AlbumList;
