import { useState } from 'react';
import { Link} from 'react-router-dom';
import { SearchBar } from '../Shared/SearchBar';
import {
  BsSearch, BsHeart, BsX,
  BsSun, BsMoon
} from 'react-icons/bs';
import './Header.css';

function MobileHeader( { searchQuery, setSearchQuery } ) {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

    return (
        <header className='mobile-header'>
            <div className='podcast-logo'>
                <h1>
                    🎙️
                    <span>SoundScoop</span>
                </h1>
            </div>
            <div className='header-icons'>
                <Link to='/favourites'>
                    <button className='favourites'>
                        <BsHeart/>
                    </button>
                </Link>
                <BsSearch onClick={toggleSearch} className="search-icon"/>
                    {isSearchOpen && (
                        <div className="mobile-search-bar">
                            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            <button onClick={toggleSearch} className="close-button">
                                <BsX size={25}/>
                            </button>
                        </div>
                )}
                
                <button className='theme-btn'>
                    <BsSun />  
                    <BsMoon/>
                </button>
            </div>
            
        </header>
    )
}

export default MobileHeader
