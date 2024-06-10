import React, { createContext, useState, useEffect, useContext } from 'react';

export const WindowWidthContext = createContext(); // Export the context

export const WindowWidthProvider = ({ children }) => {
  const [isSmallerDevice, setIsSmallerDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsSmallerDevice(window.innerWidth < 500);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <WindowWidthContext.Provider value={isSmallerDevice}>
      {children}
    </WindowWidthContext.Provider>
  );
};

export const useWindowWidth = () => {
  return useContext(WindowWidthContext);
};
