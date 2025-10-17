import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";

import { FavouritesContext } from "../Shared/FavouritesContext.jsx";
import { useFilter } from '../Shared/FilterContext.jsx'

import { format, parseISO } from "date-fns";

import { SearchBar } from '../Shared/SearchBar.jsx';
import ThemeToggle from '../Shared/ThemeToggle.jsx';
// import { GenreDropdown, SortDropdown } from '../Shared/DropdownElements.jsx';
// import { genresDropDown, getGenreTitles } from '../../utils/getGenres.js'


import { BsChevronLeft, BsSuitHeartFill, BsPlayCircleFill } from "react-icons/bs";

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

  const { favourites } = useContext(FavouritesContext);
  const { selectedGenre, sortOption } = useFilter();

  const groupedFavourites = favourites.reduce((groups, fav) => {
    const title = fav.podcastTitle || "Unknown Podcast";
    if (!groups[title]) groups[title] = [];
    groups[title].push(fav);
    return groups;
  }, {});

  return (
    <>
    <header className='page-header'>
      <Link to='/'>
          <BsChevronLeft />
      </Link>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <ThemeToggle/>
    </header>

    <div className='favourites'>
      <h2>Favourite Episodes</h2> 
      <p>Your saved episodes from all shows</p>

      {favourites.length === 0 ? (
        <p className='no-saved-episodes'>You haven't added any favourites yet.</p>
      ) : (
        <div className="favourites-page">
        {Object.entries(groupedFavourites).map(([podcastTitle, episodes]) => (
          <section key={podcastTitle} className="saved-podcast">
            <h4 className="podcast-heading">
              {podcastTitle}{" "}
              <span className="episode-saved-count">
                ({episodes.length} Episode{episodes.length > 1 ? "s" : ""})
              </span>
            </h4>

            {episodes.map((ep, index) => (
              <div key={ep.id || index} className="episode-saved">
                <img
                  className="episode-image"
                  src={ep.image}
                  alt={ep.title}
                  loading="lazy"
                />

                <div className="episode-info">
                  <h5 className="episode-title">
                    Episode {ep.episode}: {ep.title}
                  </h5>
                  {ep.description && (
                    <p className="episode-description">
                      {ep.description.length > 120
                        ? ep.description.slice(0, 120) + "..."
                        : ep.description}
                    </p>
                  )}
                  <p className="date-added">
                    Added on{" "}
                    {ep.dateAdded
                      ? format(parseISO(ep.dateAdded), "MMM dd, yyyy")
                      : "Unknown date"}
                  </p>
                </div>

                <div className="episode-actions">
                  <label className="favourites-icon">
                    <BsSuitHeartFill color="red" />
                  </label>
                  <button className="play-button">
                    <BsPlayCircleFill size={24} />
                  </button>
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
      )}

      

    </div>
    </>
  );
}



export default FavouritesPage;