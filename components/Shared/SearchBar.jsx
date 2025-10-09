import { BsSearch } from 'react-icons/bs';

export function SearchBar( {searchQuery, setSearchQuery} ) {
    return (
        <div className='search-component'>
            <BsSearch className='search-icon' />
            <input className='search-input' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='What do you want to play?' required />
        </div>
    )
}
