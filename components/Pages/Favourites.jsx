import { Link } from 'react-router-dom';
import { useState, useContext } from "react";

import { FavouritesContext } from "../Shared/FavouritesContext.jsx";
import { useFilter } from '../Shared/FilterContext.jsx'

import { format, parseISO } from "date-fns";
import { BsChevronLeft, BsSuitHeartFill, BsPlayCircleFill } from "react-icons/bs";

import { SearchBar } from '../Shared/SearchBar.jsx';
import ThemeToggle from '../Shared/ThemeToggle.jsx';
import { SortDropdown } from '../Shared/DropdownElements.jsx';

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
function FavouritesPage() {

  const { favourites } = useContext(FavouritesContext);
  const { sortOption } = useFilter();
  const [searchQuery, setSearchQuery] = useState("");

  let sortedFavourites = [...favourites];


  // Apply sorting logic
  if (sortOption === "az") {
    sortedFavourites.sort((a, b) =>
      a.podcastTitle.localeCompare(b.podcastTitle)
    );
  } else if (sortOption === "za") {
    sortedFavourites.sort((a, b) =>
      b.podcastTitle.localeCompare(a.podcastTitle)
    );
  } else if (sortOption === "newest") {
    sortedFavourites.sort(
      (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
    );
  } else if (sortOption === "oldest") {
    sortedFavourites.sort(
      (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
    );
  }

  // Groups related podcast epsiode together
  const groupedFavourites = sortedFavourites.reduce((groups, fav) => {
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

      <div className="sort-favourites">
        <label>Sort by:</label>
        <SortDropdown />
      </div>

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
                    Season {ep.season} — Episode {ep.episode}: {ep.title}
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
                      ? format(parseISO(ep.dateAdded), "MMM dd, yyyy, hh:mm a")
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