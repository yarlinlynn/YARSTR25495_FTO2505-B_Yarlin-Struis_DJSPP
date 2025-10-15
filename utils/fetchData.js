
/**
 * Fetches the complete list of podcasts from the public Podcast API.

 * It updates the provided React state setters (`setPodcast`, `setLoading`, and `setError`)
 * to reflect the current loading, success, or error state of the fetch operation.
 *
 * A short artificial delay (1 second) is applied using `setTimeout()` to improve perceived UX
 * by showing a loading animation.
 *
 * @async
 * @function fetchPodcast
 * 
 * @param {Function} setPodcast - React state setter to update the podcasts list once fetched.
 * @param {Function} setLoading - React state setter to indicate loading state.
 * @param {Function} setError - React state setter to store an error object if fetching fails.
 */
export async function fetchPodcast(setPodcast, setLoading, setError) {
    try {
        const response = await fetch((`https://podcast-api.netlify.app/`));
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const podcasts = await response.json();
        setTimeout(() => {
            setPodcast(podcasts);
            setLoading(false); 
        }, 1000);
    } catch(error) {
        setError(error)
    } finally {
        setLoading(false)
    }
}

/**
 * Fetches detailed data for a single podcast by its unique ID.

 * It updates the provided React state setters (`setPodcast`, `setLoading`, and `setError`)
 * to handle data, loading, and error state transitions.
 *
 * @async
 * @function fetchPodcastDeatils
 * 
 * @param {string|number} id - The unique identifier of the podcast to fetch.
 * @param {Function} setPodcast - React state setter to store the fetched podcast details.
 * @param {Function} setLoading - React state setter to indicate loading state.
 * @param {Function} setError - React state setter to capture any errors during fetch.
 */
export async function fetchPodcastDeatils(id, setPodcast, setLoading, setError) {
    try {
        setLoading(true);
        const response = await fetch((`https://podcast-api.netlify.app/id/${id}`));
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const podcast = await response.json();
        setPodcast(podcast);
        // console.log("Fetched podcast:", podcast)
    } catch(error) {
        setError(error)
    } finally {
        setLoading(false)
    }
}
