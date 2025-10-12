import { BsSearch } from 'react-icons/bs';

/**
 * SearchBar component — a controlled input field for filtering or searching content.
 * 
 * This component includes:
 * - A search icon for visual indication.
 * - A text input field bound to the `searchQuery` state.
 * 
 * The component is controlled by two props:
 * - `searchQuery`: current search text
 * - `setSearchQuery`: function to update the search text when the user types
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.searchQuery - The current search input value.
 * @param {Function} props.setSearchQuery - Function to update the search query state.
 * 
 * @returns {JSX.Element} A React component rendering a search input field with an icon.
 */
export function SearchBar( {searchQuery, setSearchQuery} ) {
    return (
        <div className='search-component'>
            <BsSearch className='search-icon' />
            <input className='search-input' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='What do you want to play?' required />
        </div>
    )
}
