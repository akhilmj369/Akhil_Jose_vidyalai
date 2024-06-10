import React from 'react';
import { WindowWidthProvider } from '../components/hooks/WindowWidthContext'; // Adjust the path accordingly

const App = ({ Component, pageProps }) => (
  <WindowWidthProvider>
    <Component {...pageProps} />
  </WindowWidthProvider>
);

export default App;
