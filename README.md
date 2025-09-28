# 🎧 Podcast (React)

A beginner-friendly React app that fetches and displays podcast data from an API.
This project demonstrates fetching data, handling loading and error states, rendering reusable components, and applying responsive layouts in React.

-  API: https://podcast-api.netlify.app/

### Features

- Fetch podcasts from ```podcast-api.netlify.app``` on initial page load
- Show loading indicator while fetching
- Handle errors/empty results with clear user messages
- Render podcasts in a responsive grid layout using reusable components
- Display podcast details:
    - Image
    - Title
    - Number of seasons
    - Associated genre names (mapped from local genres.js)
    - Formatted last updated date (using date-fns)
- Clean styling with CSS Grid/Flexbox for responsive design
- Readable, modular code with clear structure and JSDoc comments 

### Search  
- Users can type into a search bar to filter podcasts by title (case-insensitive).  
- Search works in tandem with other filters and pagination.

### Genre Filtering  
- Podcasts often come with genre **IDs** from the API.  
- Converts those IDs to **human-readable titles** (e.g. `1 → Technology`, `2 → Drama`).  
- A dropdown lists all genres (plus an “All” option).  
- When a user selects a genre, only podcasts of that genre are shown.

### Sorting
- Sort dropdown allows sorting podcasts:
  - **A → Z**
  - **Z → A**

### Filter Options
- Another dropdown to filter podcasts by:
  - **Recently Updated** 
  - **Most Popular** 
  - **Newest** 

### Pagination  
- Results are sliced into “pages” (e.g. 10 podcasts per page).  
- Navigation via “Prev / Next” and page numbers.  
- Pagination respects current filters and sorting — so changing search or genre resets to page 1 and only shows relevant items.

<br/>

### Tech Stack
- React
    - UI library
- date-fns
    - for date formatting
- CSS (Grid/Flexbox) – responsive styling
- Fetch API – to retrieve podcasts

<br/>

###  How It Works
1. Fetch podcast data
- On page load, ```useEffect()``` triggers a ```fetch()``` request to the API.
- While data is being fetched, a loading indicator is displayed.
- If fetching fails, a clear error message is shown.

2. Render podcasts
- Once data is loaded, podcasts are rendered as a grid of cards.
- Each card is a reusable PodcastCard component that receives data via props.
- ``.map()`` is used to loop over the API results and create cards dynamically.

3. Card contents
Each podcast card includes:
- Podcast image
- Title
- Number of seasons
- Genre tags (mapped from local genres.js)
- Last updated date (formatted, e.g. “2 days ago”)

4. Responsive Layout
- CSS Grid/Flexbox ensures podcasts display neatly across mobile, tablet, and desktop.

<br/>

#### License
This project is for educational use only.
