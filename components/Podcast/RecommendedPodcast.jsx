import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPodcast } from '../../utils/fetchData.js';
import { getGenreTitles } from '../../utils/getGenres.js'

/**
 * Displays a list of recommended podcasts.
 * Fetches podcasts from the API and selects a random subset to display and changes on refresh.
 *
 * @component
 * @returns {JSX.Element} The recommended podcasts section
 */
function RecommendedPodcast() { 

    const [podcasts, setPodcasts] = useState([]);
    const [randomPodcasts, setRandomPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);   

    const navigatePage = useNavigate();

    // Fetch podcasts
    useEffect(() => {
        fetchPodcast(setPodcasts, setLoading, setError);
    }, []);

    useEffect(() => {
        if (podcasts.length > 0) {
            const shuffled = [...podcasts].sort(() => 0.5 - Math.random());
            setRandomPodcasts(shuffled.slice(0, 10));
        }
    }, [podcasts]);

  return (
    <>
        <section className='recommended-podcast'>
            <h2>Recommended Podcasts</h2>

            {
                loading ? (
                    <p className='loading-message'>Loading recommendations...</p>
                ) : error ? (
                    <p className='error-message'>{error.message}</p>
                ) : (
                    <div className='recommended-container'>
                        {randomPodcasts.map((podcast) => (
                            <div className='recommended-card' key={podcast.id} onClick={() => navigatePage(`/podcast/${podcast.id}`)}>
                                <img src={podcast.image} alt={podcast.title}  className='card-image'/>
                                <h5 className='rec-podcast-title'>{podcast.title}</h5>
                                <div className='rec-genres-list'>
                                    {getGenreTitles(podcast).map( (title, i) => (
                                        <p key={i}>{title}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
 
        </section>
    </>
  )
}

export default RecommendedPodcast