import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFilter } from '../Shared/FilterContext.jsx';

import { fetchPodcast } from '../../utils/fetchData.js';

import Header from '../Header/Header.jsx';
import PodcastGrid from '../../components/Podcast/PodcastGrid.jsx';
import RecommendedPodcast from '../Podcast/RecommendedPodcast.jsx';
// import AudioPlayer from '../AudioPlayer/AudioPlayer.jsx';

import { getGenreTitles, genresDropDown } from '../../utils/getGenres.js';
import { GenreDropdown, SortDropdown } from '../Shared/DropdownElements.jsx';

// import IoCloseOutline from "react-icons/bs";

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
    const [searchQuery, setSearchQuery] = useState("");

    const { selectedGenre, sortOption } = useFilter();

    const itemsPerPage = 10;

    useEffect(() => {
        fetchPodcast(setPodcast, setLoading, setError);
    }, []);

    const genreOptions = genresDropDown(podcasts);

    // Filter
    const filteredPodcasts = podcasts.filter((podcast) => {
    const matchesSearch = podcast.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (selectedGenre === "All") return matchesSearch;
    const podcastGenres = getGenreTitles(podcast);
        return matchesSearch && podcastGenres.includes(selectedGenre);
    });

    // sort
    const sortedPodcasts = [...filteredPodcasts].sort((a, b) => {
        switch (sortOption) {
        case "az": return a.title.localeCompare(b.title);
        case "za": return b.title.localeCompare(a.title);
        case "newest": return new Date(b.created) - new Date(a.created);
        case "oldest": return new Date(a.created) - new Date(b.created);
        default: return 0;
        }
    });

    // Pagination
    const totalPages = Math.ceil(sortedPodcasts.length / itemsPerPage);
    const firstIndex = (currentPage - 1) * itemsPerPage;
    const currentRecords = sortedPodcasts.slice(firstIndex, firstIndex + itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedGenre, sortOption]);

    return (
        <>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            <RecommendedPodcast/>

            <section className='container dropdown-elements'>
                <GenreDropdown genres={genreOptions} />
                <SortDropdown />
            </section>

            <main>
                <section className='render-podcast'>

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
                        {/* <IoCloseOutline  className='error-icon' /> */}
                    </div>
                    <p className="error-message">
                        Failed to fetch Podcasts from API. Please refresh webpage
                    </p>
                    </div>
                ) : currentRecords.map( (podcast) => (
                    <Link key={podcast.id} to={`/podcast/${podcast.id}`}>
                        <PodcastGrid key={podcast.id} podcast={podcast} />
                    </Link>
                ))
                }

                </section>
                
                <section className="pagination-container">
                    <ul className="pagination">
                        {/* Prev button */}
                        <li>
                        <button
                            className={`page-link prev ${currentPage === 1 ? "disabled" : ""}`}
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        </li>

                        {/* Page numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                        <li key={n}>
                            <button
                            className={`page-link ${n === currentPage ? "active" : ""}`}
                            onClick={() => setCurrentPage(n)}
                            >
                            {n}
                            </button>
                        </li>
                        ))}

                        {/* Next button */}
                        <li>
                        <button
                            className={`page-link next ${currentPage === totalPages ? "disabled" : ""}`}
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                        </li>
                    </ul>
                </section>
            </main>

            {/* <AudioPlayer/> */}
        </>
    )
}

export default HomePage

