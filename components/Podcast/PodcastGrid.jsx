import { format, parseISO } from 'date-fns';
import getGenreTitles from "../../utils/getGenres";

/**
 * Renders a single podcast card with title, description, date, season and genres.
 * @param {Object} props - Component props.
 * @param {Object} props.podcast - The podcast object with id, title, description, date, season and genres.
 * @param {Function} props.onClick - Function to call when the card is clicked, passing the podcast.
 * @returns {JSX.Element} The rendered podcast card.
 */

function PodcastGrid( {podcast, onClick} ) {
    const formattedDate = format(parseISO(podcast.updated), "MMMM d, yyyy");

    return (
        <section className="podcast-card" key={podcast.id} id={podcast.id} onClick={onClick}>
            <img className="podcast-img" src={podcast.image} alt={podcast.title}  loading="lazy"/>

            <div className="podcast-container">
                <h2 className="title">{podcast.title}</h2>
                <p className="podcast-season">{podcast.seasons} seasons</p>
                <div className="genres-list">
                    {getGenreTitles(podcast).map( (title, i) => (
                        <p key={i} className='genre'>{title}</p>
                    ))} 
                </div>
                <p className="podcast-date">Updated: <span>{formattedDate}</span></p>
            </div>
        </section>
    )
}

export default PodcastGrid