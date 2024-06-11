import { useContext } from 'react';
import { WindowWidthContext } from './WindowWidthContext'; // Adjust the path accordingly

const useWindowWidth = () => {
  return useContext(WindowWidthContext);
};

export default useWindowWidth;
