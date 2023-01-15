import { useContext } from 'react';

import NavigationContext from './navigation';

function Rout({ path, children }) {
  const { currentPath } = useContext(NavigationContext);
  if (path === currentPath) {
    return children;
  } else {
    return null;
  }
}

export default Rout;
