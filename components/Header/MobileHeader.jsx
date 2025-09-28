import { IoSearchOutline, /*IoLibraryOutline, IoPerson, IoSunny*/ } from "react-icons/io5";
// import { GoHomeFill } from "react-icons/go";
import './Header.css';

function MobileHeader( {searchQuery, setSearchQuery} ) {
    return (
        <>
            {/* <nav className='mobile-header'>
                <ul className='nav-container'>
                     <li className='nav-link' >
                        <GoHomeFill />
                        <span>Home</span>
                    </li> 
                    <li className='nav-link' >
                        <IoSearchOutline className='search-icon' />
                        <input className='search-input' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='What do you want to play?' required />
                    </li>
                    <li className='nav-link' >
                        <IoLibraryOutline />
                        <span>Library</span>
                    </li>
                </ul>
            </nav> */}

            <div className='header-container'>
                <h1>🎙️</h1>
                <div className='search'>
                    <IoSearchOutline className='search-icon' />
                    <input className='search-input' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='What do you want to play?' required />
                </div>
                {/* <div className="profile">
                    <IoPerson />
                </div>
                <div className="theme-btn">
                    <IoSunny />
                </div> */}
            </div>
        </>
    )
}

export default MobileHeader
