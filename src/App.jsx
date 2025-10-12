import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../components/Shared/ThemeContext.jsx';
import './App.css';
import HomePage from '../components/Pages/HomePage.jsx';
import FavouritesPage from '../components/Pages/Favourites.jsx';
import PodcastDetails from '../components/Podcast/PodcastModal.jsx';

/**
 * App component — the root component that defines all application routes.
 * 
 * This component uses `react-router-dom` to configure navigation between pages:
 * - `/` → **HomePage**
 * - `/favourites` → **FavouritesPage**
 * - `/podcast/:id` → **PodcastDetails**
 * 
 * Serves as the entry point 
 * 
 * @returns {JSX.Element} The root component that renders route definitions.
 */
function App() {

  return (
    <>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/podcast/:id" element={<PodcastDetails />} />
      </Routes>
    </ThemeProvider>
      

    </>
  )

}

export default App
