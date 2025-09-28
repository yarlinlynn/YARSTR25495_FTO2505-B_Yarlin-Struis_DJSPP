import { genres } from './data.js';

/**
 * Maps genre IDs from a podcast to their corresponding titles.
 * @param {Object} podcast - The podcast object with a genres array.
 * @param {Array<Object>} genres - The array of genre objects with id and title.
 * @returns {string[]} Array of genre titles, excluding "Unknown".
 */

export function getGenreTitles(podcast) {
  return podcast.genres
    .map(id => genres.find(g => g.id === id)?.title || "Unknown")
    .filter(title => title !== "Unknown");
}

/** 
 * Generate a unique list of genre options for use in a dropdown.
 * Combines all genres from the given podcasts, maps their IDs to titles
 * @param {Array<Object>} podcasts - Array of podcast objects fetched from the API.
 * Each podcast is expected to have a `genres` array containing numeric genre IDs.
 * @returns {string[]} A list of genre titles including "All" at the start.
*/
export function genresDropDown(podcasts) {
  const genres = ['All', ...new Set(podcasts.flatMap(podcast => getGenreTitles(podcast)))]
  return genres;
}