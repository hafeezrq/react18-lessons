import { useContext } from 'react';
import NavigationContext from '../lesson13-navigation/context/navigation';

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
