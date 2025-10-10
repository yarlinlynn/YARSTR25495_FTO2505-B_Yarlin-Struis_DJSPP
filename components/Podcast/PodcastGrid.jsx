import { useNavigate } from "react-router-dom";
import { format, parseISO } from 'date-fns';
import { getGenreTitles } from "../../utils/getGenres";

/**
 * Renders a single podcast card with title, description, date, season and genres.
 * @param {Object} props - Component props.
 * @param {Object} props.podcast - The podcast object with id, title, description, date, season and genres.
 * @param {Function} props.onClick - Function to call when the card is clicked, passing the podcast.
 * @returns {JSX.Element} The rendered podcast card.
 */

function PodcastGrid( {podcast} ) {
    const navigate = useNavigate();
    const formattedDate = format(parseISO(podcast.updated), "MMMM d, yyyy");

    const handlePodcastClick = (id) => {
    navigate(`/podcast/${id}`);
  };

    return (
        <section className="podcast-card" key={podcast.id} id={podcast.id} onClick={() => handlePodcastClick(podcast.id)}>
            <h2 className="title">{podcast.title}</h2>

            <div className="podcast-container">
                <span className="podcast-season">{podcast.seasons} seasons</span>
                <span className="podcast-date">Updated: <span>{formattedDate}</span></span>
                {/* <div className="genres-list">
                    {getGenreTitles(podcast).map( (title, i) => (
                        <p key={i} className='genre'>{title}</p>
                    ))} 
                </div> */}
            </div>
            <img className="podcast-img" src={podcast.image} alt={podcast.title}  loading="lazy"/>
        </section>
    )
}

export default PodcastGrid