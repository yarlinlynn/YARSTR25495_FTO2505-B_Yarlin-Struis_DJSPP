import { genres } from './data.js';

/**
 * Maps genre IDs from a podcast to their corresponding titles.
 * @param {Object} podcast - The podcast object with a genres array.
 * @param {Array<Object>} genres - The array of genre objects with id and title.
 * @returns {string[]} Array of genre titles, excluding "Unknown".
 */

function getGenreTitles(podcast) {
  return podcast.genres
    .map(id => genres.find(g => g.id === id)?.title || "Unknown")
    .filter(title => title !== "Unknown");
}

export default getGenreTitles