import { useState, useEffect } from 'react';
import DekstopHeader from './DesktopHeader.jsx';
import MobileHeader from './MobileHeader.jsx';

function Header() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    {isMobile ? <MobileHeader /> : <DekstopHeader />}
    </>
  );

}

export default Header

export function SearchBar( {searchQuery, setSearchQuery} ) {
    return (
        <div className='search-component'>
            <BsSearch className='search-icon' />
            <input className='search-input' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='What do you want to play?' required />
        </div>
    )
}