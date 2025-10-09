import { useState, useEffect } from 'react';
import DekstopHeader from './DesktopHeader.jsx';
import MobileHeader from './MobileHeader.jsx';

function Header( { searchQuery, setSearchQuery } ) {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      ) : (
        <DekstopHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      )}
    </>
  );

}

export default Header
