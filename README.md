# 🎧 Podcast (React)

The Podcast app is a single-page React application (SPA) that fetches podcast data from a public API and provides interactive features like:
- Searching podcasts by title
- Filtering by genre using global state for dropdown select components
- Sorting by A-Z, Z-A, oldest, newest, or default
- Viewing detailed podcast information (including seasons and episodes)
- Saving favorite episodes to local storage, including podcast image, name, description, and date/time saved
- A recommended podcasts section that fetches a random group of 10 podcasts on each refresh
- Theme toggle (light/dark) persisted in local storage
- Pagination to fetch and display podcasts in batches instead of all at once

The app is structured around modular React components, each handling a specific UI or data logic task.

### Key Features
- Dynamic Routing using react-router-dom
- API Integration via fetchPodcast and fetchPodcastDetails
- Pagination & Sorting (A-Z, Z-A, oldest, newest, default)
- Filtering and Sorting via global state in dropdown selects
- Search Functionality
- Recommended Podcasts: Displays a random selection of 10 podcasts on each page refresh
- Podcast Details Page: Dynamic routing to display details for a selected podcast by ID, including name, image, description, date, seasons, episode count, and a season selector to view related episodes
- Favorites Management: Toggle button to add/remove episodes to favorites, saved in local storage with details (image, name, description, - date/time added)
- Theme Toggle: Switch between light and dark themes, persisted in local storage
- Loading & Error Handling


### Components Breakdown
#### 1. App.jsx
The root component that defines all the application routes.
Responsibilities:
- Sets up Routes using react-router-dom
- Renders HomePage, FavouritesPage, and PodcastDetails based on the URL path
- Manages global state for shared features like theme toggle, genre filtering, and sorting

| Path | Component | Description |
|-----------|-----------|-----------|
| / | HomePage | Displays podcast with filters, sorting, pagination, and recommended section |
| /favourites | FavouritesPage | Shows saved episodes |
| /podcast/:id | PodcastDetails | Displays detailed podcast info by ID |

#### 2. HomePage.jsx
The main discovery page where users browse all podcasts.
Core Responsibilities:
- Fetch all podcasts from the API using fetchPodcast
- Manage states: podcasts, loading, error
- Search input (searchQuery)
- Genre filtering (selectedGenre) via global state
- Sorting dropdown to cycle through A-Z, Z-A, oldest, newest, or default
- Pagination to display podcasts in batches
- Recommended section: Fetches and displays a random group of 10 podcasts on each refresh
- Render dynamic podcast cards, pagination controls, and recommended podcasts

| Section | Purpose | 
|-----------|-------|
| State Declarations | Manage app data, filters, pagination, sorting, theme, and UI states | 
| Filtering Logic | Filters podcasts by title and genre using global state | 
| Sorting Logic | Sorts by name (A-Z/Z-A), updated date (oldest/newest), or default | 
| Pagination | Slices the data array into smaller batches for display | 
| Recommended Section | Randomly selects and displays 10 podcasts on refresh | 
| Render | Displays search bar, dropdown filters (genre and sorting), loading/error states, paginated results, and recommended podcasts |

<br/>

#### 3. FavouritesPage.jsx
Displays the user’s saved podcast episodes.
Responsibilities:
- Provides a back navigation link to the home page
- Displays a list of saved episodes with details (podcast image, name, description, date/time saved)
- Sorting dropdown to cycle through A-Z, Z-A, oldest, newest, or default for saved episodes
- Applies theme from global state/local storage

| Element | Description  |
|-----------|-----------|
| Header | Contains back arrow (BsChevronLeft) and search bar |
| Main Section | Shows saved podcasts and their episodes |
| Episode Entries	 | Each includes title, date added, favorite icon, and play button |

<br/>

#### 4. PodcastDetails.jsx
Displays detailed information for a single podcast based on its id parameter.
Responsibilities:
- Fetch specific podcast data via fetchPodcastDetails
- Display metadata (title, description, genres, last updated date, image, seasons, episode count)
- Render dynamic season selector and episode lists for the selected season
- Toggle add to favorites button for each episode, saving to local storage with podcast details (image, name, description, date/time)
- Handle loading and error states
- Applies theme from global state/local storage

| Section | Purpose  |
|-----------|-----------|
| Header | Back navigation to the homepage |
| Podcast Info | Image, title, description, genres, updated date |
| Season Dropdown	 | Allows selecting a season |
| Episodes List | Displays all episodes for the selected season with add to favorites button |


<br/>

#### 5. SearchBar.jsx
An input for filtering podcasts.
Responsibilities:
- Accepts two props: searchQuery and setSearchQuery
- Updates parent component’s state when user types
- Styled with a BsSearch icon
- Compatible with light/dark themes

<br/>

### API Service

```fetchPodcast()``` : Fetches all podcasts from the base API : ```GET https://podcast-api.netlify.app/```

- Triggers loading state
- Fetches all podcasts
- Sets state after 1s delay
- Catches and logs any errors

```fetchPodcastDeatils(id)``` : Fetches detailed information for a single podcast : ```GET https://podcast-api.netlify.app/id/{id}```

- Sets loading to true at start
- Fetches detailed podcast data
- Updates state with returned object
- Handles network or API errors

<br/>

### Technologies Used
- React
- React Router DOM
- Styling CSS Modules / Custom Classes
- Icons React Icons (Bootstrap & Ionicons)
- Date Formatting date-fns
- API Fetch API
- Local Storage for favorites and theme persistence

<br/>

### Installation & Setup

1. Clone repository
```
git clone https://github.com/yarlinlynn/YARSTR25495_FTO2505-B_Yarlin-Struis_DJS05.git
```
2. Navigate to project directory
```
cd podcast-app
```
3. Install dependencies
```
npm install
```
4. Start development server
```
npm run dev
```

<br/>

#### License
This project is for educational use only.
