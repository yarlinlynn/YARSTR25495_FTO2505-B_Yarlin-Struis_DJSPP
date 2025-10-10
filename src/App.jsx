import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../components/Pages/HomePage.jsx';
// import LibraryPage from '../components/Pages/LibraryPage.jsx';
import FavouritesPage from '../components/Pages/Favourites.jsx';
import PodcastDetails from '../components/Podcast/PodcastModal.jsx';
import Header from '../components/Header/Header';
import PodcastGrid from '../components/Podcast/PodcastGrid.jsx';
import { getGenreTitles, genresDropDown } from '../utils/getGenres.js';
import Modal from "../components/Podcast/PodcastModal.jsx";

function App() {


  return (
    <>
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/podcast/:id" element={<PodcastDetails />} />
    </Routes>
      

    </>
  )

}

export default App
