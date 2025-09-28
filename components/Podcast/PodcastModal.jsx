import { getGenreTitles } from "../../utils/getGenres";
import { format, parseISO } from "date-fns";
import { IoCloseOutline } from "react-icons/io5";
import "../Podcast/Podcast.css";

/**
 * Renders a modal displaying details of a selected podcast.
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Object|null} props.podcast - The selected podcast object.
 * @param {Function} props.onClose - Function to close the modal.
 * @returns {JSX.Element|null} The rendered modal or null if not open.
 */
function Modal( {podcast, onClose} )  {
    if (!podcast) return null;
    const formattedDate = format(parseISO(podcast.updated), "MMMM d, yyyy");

    return (
        <section className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
                <div className="section_title">
                    <h2 className="modalTitle">{podcast.title}</h2>
                    <button className="close-btn" onClick={onClose}>
                        <IoCloseOutline />
                    </button>
                </div>
                <div className="banner">
                <img src={podcast.image} alt={podcast.title}/>
                <div className="podcast-info">
                    <p className="description">{podcast.description}</p>
                    <div id="modalGenres" className="tags">
                        {getGenreTitles(podcast).map((title, i) => (
                            <span key={i} className="tag">
                            {title}
                            </span>
                        ))}
                    </div>
                    <p id="modalUpdated" className="modal-updated-text">
                        Updated: 
                        <span className="date">{formattedDate}</span>
                    </p>
                    
                </div>
                <h3>{podcast.seasons} seasons</h3>
            </div>
            </div>
        </section>
    )
}
export default Modal