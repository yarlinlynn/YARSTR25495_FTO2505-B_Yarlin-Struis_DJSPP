
import { BsSearch, BsCollection, BsSun, BsMoon, BsFolder2Open } from "react-icons/bs";
import { SearchBar } from './Header.jsx';
import './Header.css';

function DekstopHeader( {searchQuery, setSearchQuery} ) {
    return(
        <header className='desktop-header'>
            <div className='podcast-logo'>
                <h1>🎙️ Podcast App</h1>
            </div>
            <div className='component'>
                {/* searchbar component */}
                <div className='search-component'>
                    <BsSearch className='search-icon' />
                    <input className='search-input' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='What do you want to play?' required />
                </div>
                <div className='favourites'>
                    <BsCollection />
                    <BsFolder2Open />
                </div>
            </div>
            <div className='component'>
                <div className='profile'></div>
                <div className='theme-btn'>
                    <BsSun />
                    <BsMoon />
                </div>
            </div>
        </header>
    )
}

export default DekstopHeader