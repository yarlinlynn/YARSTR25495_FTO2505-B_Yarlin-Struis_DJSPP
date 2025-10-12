import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPodcast } from '../../utils/fetchData.js';
import PodcastGrid from '../../components/Podcast/PodcastGrid.jsx';
import { getGenreTitles, genresDropDown } from '../../utils/getGenres.js';
import Header from '../Header/Header.jsx';
import RecommendedPodcast from '../Podcast/RecommendedPodcast.jsx';

/**
 * HomePage component — displays a list of podcasts with search, genre filtering, sorting, and pagination.
 * 
 * This component:
 * - Fetches podcast data from an external API.
 * - Allows users to search podcasts by title.
 * - Filters podcasts by genre.
 * - Sorts podcasts by title (A→Z or Z→A) and other criteria (Recently Updated, Most Popular, Newest).
 * - Displays paginated results with navigation controls.
 * 
 * @returns {JSX.Element} A React component rendering the podcast discovery homepage.
 */
function HomePage() {
    const [podcasts, setPodcast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedGenre, setSelectedGenre] = useState('All');

    const [openModal, setOpenModal] = useState(null);

    const [sortOrder, setSortOrder] = useState("az");

    const [filterOption, setFilterOption] = useState("Recently Updated");

    const itemsPerPage = 10;
    const filteredPodcasts = podcasts
    .filter( (podcast) => podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(podcast => {
      if (selectedGenre === "All") return true;
      const podcastGenreTitles = getGenreTitles(podcast);
      return podcastGenreTitles.includes(selectedGenre);
    });
  
    const filteredAndSorted = [...filteredPodcasts].sort((a, b) => {
      if (filterOption === "Recently Updated") {
        return new Date(b.updated) - new Date(a.updated); 
      } else if (filterOption === "Most Popular") {
        return b.popularity - a.popularity; 
      } else if (filterOption === "Newest") {
        return new Date(b.created) - new Date(a.created); 
      }
      return 0;
    });
  
    const genreOptions = genresDropDown(podcasts);
  
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const records = filteredAndSorted.slice(firstIndex, lastIndex);
  
    const totalPages = Math.ceil(filteredPodcasts.length / itemsPerPage)
    const numbers = [...Array(totalPages + 1).keys()].slice(1);

    useEffect( () => {
        fetchPodcast( setPodcast, setLoading, setError )
    }, [])

    useEffect( () => {
      setCurrentPage(1);
    }, [searchQuery]);

    return (
        <>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            <RecommendedPodcast/>

            <section className='container'>
                <select className='genres' value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
                {genreOptions.map(title => (
                    <option key={title} value={title}>{title}</option>
                ))}
                </select>
                <select className='sort'  value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                <option value="az">A → Z</option>
                <option value="za">Z → A</option>
                </select>
                <select  className='date' value={filterOption} onChange={e => setFilterOption(e.target.value)}>
                <option value="Recently Updated">Recently Updated</option>
                <option value="Most Popular">Most Popular</option>
                <option value="Newest">Newest</option>
                </select>
            </section>

            <main>

                {loading ? ( 
                <div className='loading-container'>
                    <div>
                    
                    <div className="loading-animation"></div>
                    
                    <p className="loading-text">Fetching data... please wait.</p>
                    </div>
                </div>
                ) : error ? (
                    <div className="error-container">
                    <div className='error'>
                        <IoCloseOutline  className='error-icon' />
                    </div>
                    <p className="error-message">
                        Failed to fetch Podcasts from API. Please refresh webpage
                    </p>
                    </div>
                ) : records.map( (podcast) => (
                    <Link key={podcast.id} to={`/podcast/${podcast.id}`}>
                        <PodcastGrid key={podcast.id} podcast={podcast} />
                    </Link>
                ))
            }

            </main>

            <section className='pagination-container'>
                <ul className='pagination'>
                <li className='page-item'>
                    <a href='#' className='page-link' onClick={ () => setCurrentPage( (p) => Math.max(p - 1, 1))}>Prev</a>
                </li>
                {
                    numbers.map( (n) => (
                    <li key={n} className={`page-item ${currentPage === n ? 'active' : ''}`}>
                        <a href='#' className='page-link' onClick={() => setCurrentPage(n)}>{n}</a>
                    </li>
                    ))
                }
                <li className='page-item'>
                    <a href='#' className='page-link' onClick={ () => setCurrentPage( (p) => Math.min(p + 1, totalPages))}>Next</a>
                </li>
                </ul>
            </section>
        </>
    )
}

export default HomePage