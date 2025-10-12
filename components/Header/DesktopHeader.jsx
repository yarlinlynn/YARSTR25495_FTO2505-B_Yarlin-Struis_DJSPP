import { Link} from 'react-router-dom';
import { 
  BsHeart, 
  BsSun, BsMoon
} from 'react-icons/bs';
import { SearchBar } from '../Shared/SearchBar.jsx';
import ThemeToggle from '../Shared/ThemeToggle.jsx';
import './Header.css';


function DekstopHeader( { searchQuery, setSearchQuery } ) {
    return (
        <header className='desktop-header'>
            <div className='podcast-logo'>
                <h1>🎙️ SoundScoop</h1>
            </div>
            <nav className='desktop-nav'>
                {/* search bar component */}
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <Link to="/favourites">
                    <BsHeart />
                </Link>
            </nav>
            <div className='profile'></div>
            <ThemeToggle/>
        </header>
    )
}

export default DekstopHeader