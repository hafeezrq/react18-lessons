import useNavigation from '../hooks/use-navigation';

function Rout({ path, children }) {
  const { currentPath } = useNavigation();
  if (path === currentPath) {
    return children;
  } else {
    return null;
  }
}

export default Rout;
