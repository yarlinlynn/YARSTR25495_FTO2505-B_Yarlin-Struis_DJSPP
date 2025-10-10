
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

export async function fetchPodcastDeatils(id, setPodcast, setLoading, setError) {
    try {
        setLoading(true);
        const response = await fetch((`https://podcast-api.netlify.app/id/${id}`));
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const podcast = await response.json();
        setPodcast(podcast);
        console.log("Fetched podcast:", podcast)
    } catch(error) {
        setError(error)
    } finally {
        setLoading(false)
    }
}
