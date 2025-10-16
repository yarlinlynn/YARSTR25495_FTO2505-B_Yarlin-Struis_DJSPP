import { useState, useEffect, useContext } from "react";
import { FavouritesContext } from '../Shared/FavouritesContext.jsx';
import { useParams, Link } from 'react-router-dom';

import { fetchPodcastDeatils } from '../../utils/fetchData.js';

import { format, parseISO } from "date-fns";
import { BsSuitHeart, BsSuitHeartFill, BsFillArrowLeftCircleFill, BsPlayCircle, BsHeart } from "react-icons/bs";
import ThemeToggle from '../Shared/ThemeToggle.jsx';
import "../Podcast/Podcast.css";

/**
 * PodcastDetails component — displays detailed information about a specific podcast.
 * 
 * This component:
 * - Retrieves a podcast ID from the URL via `useParams()`
 * - Displays the podcast title, image, description, genres, update date, and season list
 * - Allows the user to select a season and view its episodes
 * 
 * @returns {JSX.Element} A React component rendering the podcast details page.
 */

function PodcastDetails() {
    const { id } = useParams();

    const [podcast, setPodcast] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { favourites, setFavourites } = useContext(FavouritesContext);
    const toggleFavourite = (episode, index) => {
    const uniqueId = `${podcast.id}-${currentSeason.season}-${index}`;

    const isFav = favourites.some(fav => fav.id === uniqueId);

    if (isFav) {
        const updatedFavs = favourites.filter(fav => fav.id !== uniqueId);
        setFavourites(updatedFavs);
        localStorage.setItem("favourites", JSON.stringify(updatedFavs));
    } else {
        const episodeWithDetails = {
        id: uniqueId,
        podcastId: podcast.id,
        podcastTitle: podcast.title,
        title: episode.title,
        description: episode.description || podcast.description,
        image: podcast.image,
        file: episode.file || null,
        episode: index + 1,
        dateAdded: new Date().toISOString(),
        };

        const updatedFavs = [...favourites, episodeWithDetails];
        setFavourites(updatedFavs);
        localStorage.setItem("favourites", JSON.stringify(updatedFavs));
    }
    };


    const isFavourite = (episode, index) => {
        const uniqueId = `${podcast.id}-${currentSeason.season}-${index}`;
        return favourites.some(fav => fav.id === uniqueId);
    };


    useEffect(() => {
        if (id) fetchPodcastDeatils(id, setPodcast, setLoading, setError);
    }, [id])

    if (loading) return (
        <div className='loading-container'>
            <div>
                    
                <div className="loading-animation"></div>
                    
                <p className="loading-text">Fetching podcast details... please wait.</p>
            </div>
        </div>
    )
    if (error) return <p>Error: {error.message}</p>;
    if (!podcast) return <p>No podcast found.</p>;

    const genres = podcast.genres || [];
    const seasons = podcast.seasons || [];

    const currentSeason = seasons[selectedSeason];

    const formattedDate = format(parseISO(podcast.updated), "MMMM d, yyyy");

    return (
        <>
        <div className='podcast-details-header'>
            <Link to='/' className='homepage-icon'>
                <BsFillArrowLeftCircleFill /> Back
            </Link>
            <Link to='/favourites' className='favourites-icon'>
                <BsHeart/>
            </Link>
            <ThemeToggle/>
        </div>

        <div className='podcast-details-page'>
            <section className='podcast-details'>
               <img src={podcast.image} alt={podcast}/> 
               <div className='details-container'>
                    <h3>{podcast.title}</h3>
                    <p>{podcast.description}</p>
                    <div className='grid-info'>
                        <div className='genres-container'>
                            <h4>Genres:</h4>
                            <div className='genres-list'>
                                {genres.map((genre) => (
                                    <span key={genre} className="genre-pill">
                                        {genre}
                                    </span>
                                ))
                            }
                            </div>
                        </div>
                        <div className='podcast-date'>
                            <h4>Last Updated:</h4>
                            <p>{formattedDate}</p>  
                        </div>
                        <div className='total-seasons'>
                            <h4>Total Seasons:</h4>
                            {seasons.length}
                        </div>
                        <div className='episode-count'>
                            <h4>Total Epidoes:</h4>
                            {seasons.reduce( (sum, s) => sum + (s.episodes ? s.episodes.length : 0), 0)}
                        </div>
                    </div>
               </div>
            </section>
            <section className='season-details'>
                <select id="seasonSelect" value={selectedSeason} onChange={(e) => setSelectedSeason(Number(e.target.value))}>
                    {/* season dropdown */}
                    {seasons.map( (s, i) => (
                        <option key={s.season} value={i}>
                            Season {s.season} 
                        </option>
                    ))}
                </select>

                {currentSeason ? (
                    <div className="season-container">
                        <h4>
                            Season {currentSeason.season} - {currentSeason.title}
                        </h4>
                        <ul className="episode-list">
                            {currentSeason.episodes.map((ep, index) => (
                                <li key={ep.id || index} className="episode-item">
                                    <div className='image-button'>
                                        <img className='episode-image' src={currentSeason.image} alt={podcast.title}/>
                                        <button className='play-episode'>
                                            <BsPlayCircle />
                                        </button>
                                    </div>
                                    <div className='episode'>
                                        <p className='episode-count'>Episode {index + 1} </p>
                                        <p className='episode-title'>{ep.title}</p>
                                    </div>
                                    <div className='favourite-btn'>
                                        <button className='add-to-favourites' onClick={() => toggleFavourite(ep, index)}>
                                            {isFavourite(ep, index) ? ( 
                                                <BsSuitHeartFill color="red" />
                                            ) : (
                                                <BsSuitHeart />
                                            )}
                                        </button>
                                    </div>
                                <span></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    ) : (
                    <p>No season data available.</p>
                )}
                
            </section>
        </div>

        
            
        
        </>
    )
}
export default PodcastDetails
