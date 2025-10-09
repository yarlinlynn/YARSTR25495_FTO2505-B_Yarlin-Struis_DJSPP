import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../components/Pages/HomePage.jsx';
// import LibraryPage from '../components/Pages/LibraryPage.jsx';
import FavouritesPage from '../components/Pages/Favourites.jsx';
// import { fetchPodcast } from '../utils/fetchData.js';
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
    </Routes>
      

    </>
  )

}

export default App
