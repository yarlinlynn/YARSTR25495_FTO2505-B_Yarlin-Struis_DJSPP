import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { fetchPodcastDeatils } from '../../utils/fetchData.js';
import { format, parseISO } from "date-fns";
import "../Podcast/Podcast.css";

/**
 * Renders a modal displaying details of a selected podcast.
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Object|null} props.podcast - The selected podcast object.
 * @param {Function} props.onClose - Function to close the modal.
 * @returns {JSX.Element|null} The rendered modal or null if not open.
 */


function PodcastDetails() {
    const { id } = useParams();

    const [podcast, setPodcast] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
        if (id) fetchPodcastDeatils(id, setPodcast, setLoading, setError);
    }, [id])

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error: {error.message}</p>;
    if (!podcast) return <p>No podcast found.</p>;

    const genres = podcast.genres || [];
    const seasons = podcast.seasons || [];

    const currentSeason = seasons[selectedSeason];

    const formattedDate = format(parseISO(podcast.updated), "MMMM d, yyyy");

    return (
        <>
        <Link to='/'>
        <BsFillArrowLeftCircleFill /> Back
        </Link>

        <div className='podcast-details-page'>
            <section className='podcast-details'>
               <img src={podcast.image} alt={podcast}/> 
               <div className='details-container'>
                    <h3>{podcast.title}</h3>
                    <p>{podcast.description}</p>
                    <div className='grid-info'>
                        <div className='genres-list'>
                            <h4>Gneres:</h4>
                            {podcast.genres && podcast.genres.length > 0 ? (
                                podcast.genres.map((genre) => (
                                    <span key={genre} className="genre-pill">
                                        {genre}
                                    </span>
                                ))
                                ) : (
                                    <span>No genres available</span>
                                )}
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
                            Season {currentSeason.season}
                        </h4>
                        <ul className="episode-list">
                            {currentSeason.episodes.map((ep) => (
                                <li key={ep.id} className="episode-item">
                                <span>{ep.title}</span>
                                <div className="episode-actions">
                                    <button className="play-btn">Play</button>
                                    <button className="fav-btn">Add to Favourites</button>
                                </div>
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

{/* <div>

            <section className='podcast-details'>
                        <h3>{podcast.title}</h3>
                        <div className='details-container'>
                            <img src={podcast.image} alt={podcast}/>
                            <div className='content-container'>
                                <p>{podcast.description}</p>
                                <div className='grid-info'>
                                    <div className='genres-list'>
                                        <h4>Gneres:</h4>
                                        {podcast.genres && podcast.genres.length > 0 ? (
                                            podcast.genres.map((genre) => (
                                            <span key={genre} className="genre-pill">
                                                {genre}
                                            </span>
                                            ))
                                        ) : (
                                            <span>No genres available</span>
                                        )}
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
                        </div>
                    </section>
                    <section className='season-details'>
                        <select id="seasonSelect" value={selectedSeason} onChange={(e) => setSelectedSeason(Number(e.target.value))}>
                            
                            {seasons.map( (s, i) => (
                                <option key={s.season} value={i}>
                                    Season {s.season}
                                </option>
                            ))}
                        </select>
                        {currentSeason ? (
                        <div className="season-container">
                            <h4>
                            Season {currentSeason.season}
                            </h4>
                            <ul className="episode-list">
                            {currentSeason.episodes.map((ep) => (
                                <li key={ep.id} className="episode-item">
                                <span>{ep.title}</span>
                                <div className="episode-actions">
                                    <button className="play-btn">Play</button>
                                    <button className="fav-btn">Add to Favourites</button>
                                </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        ) : (
                        <p>No season data available.</p>
                        )}
                        
                    </section>
        </div> */}