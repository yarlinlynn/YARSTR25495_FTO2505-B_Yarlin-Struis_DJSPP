import React from 'react';
// import Header from '../Header/Header.jsx';
import { SearchBar } from '../Shared/SearchBar.jsx';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from "react-icons/bs";

/**
 * FavouritesPage component — displays the saved podcast episodes.
 * 
 * This page includes:
 * - A header with a back navigation link and a search bar.
 * - A section listing the user's favourite episodes.
 * 
 * @param {Object} props - The component properties.
 * @param {string} props.searchQuery - The current value of the search input.
 * @param {Function} props.setSearchQuery - Function to update the search query state.
 * 
 * @returns {JSX.Element} A React component displaying the favourites page layout.
 */
function FavouritesPage( { searchQuery, setSearchQuery } ) {
  return (
    <>
    <header className='page-header'>
      <Link to='/'>
          <BsChevronLeft />
      </Link>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </header>

    <div className='favourites'>
      <h2>Favourite Episodes</h2> 
      <p>Your saved episodes from all shows</p>



      {/* <section className='saved-podcast'>
        <h4>
          Podcast Title
          <span className='eipsode-saved-count'>(4 Episodes)</span>
        </h4>
        

        <div className='episode-saved'>
          <h5>Episode 1 : Six Minutes Begins</h5>
          <p className='date-added'>Added on Jan 15 2025</p>
          <label className='favourites-icon'></label>
          <button className='play-episode'></button>
        </div>
        <div className='episode-saved'>
          <h5>Episode 1 : Six Minutes Begins</h5>
          <p className='date-added'>Added on Jan 15 2025</p>
          <label className='favourites-icon'></label>
          <button className='play-episode'></button>
        </div>
        <div className='episode-saved'>
          <h5>Episode 1 : Six Minutes Begins</h5>
          <p className='date-added'>Added on Jan 15 2025</p>
          <label className='favourites-icon'></label>
          <button className='play-episode'></button>
        </div>
        <div className='episode-saved'>
          <h5>Episode 1 : Six Minutes Begins</h5>
          <p className='date-added'>Added on Jan 15 2025</p>
          <label className='favourites-icon'></label>
          <button className='play-episode'></button>
        </div>
      </section> */}

    </div>
    </>
  );
}

export default FavouritesPage;