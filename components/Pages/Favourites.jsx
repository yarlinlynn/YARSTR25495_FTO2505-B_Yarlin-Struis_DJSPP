import React from 'react';
// import Header from '../Header/Header.jsx';
import { SearchBar } from '../Shared/SearchBar.jsx';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from "react-icons/bs";

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

    </div>
    </>
  );
}

export default FavouritesPage;