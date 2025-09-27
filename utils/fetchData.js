
export async function fetchPodcast(setPodcast, setLoading, setError) {
    try {
        const response = await fetch((`https://podcast-api.netlify.app/`));
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const podcasts = await response.json();
        setTimeout(() => {
            setPodcast(podcasts);
            console.log( podcasts)
            setLoading(false); 
        }, 1000);
    } catch(error) {
        setError(error)
    } finally {
        setLoading(false)
    }
}
