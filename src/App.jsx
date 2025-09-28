import { useEffect, useState } from 'react'
import './App.css';
// import { fetchPodcast } from '../utils/fetchData.js';
import MobileHeader from '../components/Header/MobileHeader.jsx';
import DekstopHeader from '../components/Header/DesktopHeader.jsx';
import { IoCloseOutline } from "react-icons/io5";
import PodcastGrid from '../components/Podcast/PodcastGrid.jsx';
import { getGenreTitles, genresDropDown } from '../utils/getGenres.js';
import Modal from "../components/Podcast/PodcastModal.jsx";

function App() {
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
    const fetchPodcasts = async () => {
      try {
        const response = await fetch((`https://podcast-api.netlify.app/`));
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        } 
        const podcasts = await response.json();
        setPodcast(podcasts)
        console.log(podcasts)
      } catch(error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    };

    const delay = setTimeout( () => {
      fetchPodcasts();
    }, 2000);
    return () => clearTimeout(delay)
  }, [])

  useEffect( () => {
      setCurrentPage(1);
    }, [searchQuery]);

  return (
    <>
      <DekstopHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MobileHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      {/* <section className='browse'>
        <h2>Recommended Podcasts</h2>
        <div className='recomended'>
          <img className='podcast-img'
            src='https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg'/>
          <div className='podcast-container'>
            <h2 className="title">Something Was Wrong</h2>
            <p className="podcast-season">14 Seasons</p>
          </div>
        </div>
      </section> */}

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
          <PodcastGrid key={podcast.id} podcast={podcast} />
        ))
      }

      </main>

      {/* pagination */}
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

      {/* modal popup */}
      {openModal && (
      <Modal podcast={openModal} onClose={() => setOpenModal(null)} />
    )}
    </>
  )


}

export default App
