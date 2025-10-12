# 🎧 Podcast (React)

The Podcast app is a single-page React application (SPA) that fetches podcast data from a public API and provides interactive features like:
- Searching podcasts by title
- Filtering by genre
- Sorting by date, popularity, or name
- Viewing detailed podcast information (including seasons and episodes)
- Saving favorite episodes

The app is structured around modular React components, each handling a specific UI or data logic task.

### Key Features
- Dynamic Routing using react-router-dom
- API Integration via fetchPodcast and fetchPodcastDeatils
- Pagination & Sorting
- Genre Filtering
- Search Functionality
- Loading & Error Handling

### Components Breakdown
#### 1. App.jsx
The root component that defines all the application routes.
Responsibilities:
- Sets up Routes using react-router-dom
- Renders HomePage, FavouritesPage, and PodcastDetails based on the URL path

| Path | Component | Description |
|-----------|-----------|-----------|
| / | HomePage | Displays podcast list with filters |
| /favourites | FavouritesPage | Shows saved episodes |
| /podcast/:id | PodcastDetails | Displays detailed podcast info |

#### 2. HomePage.jsx
The main discovery page where users browse all podcasts.
Core Responsibilities:
- Fetch all podcasts from the API using fetchPodcast
- Manage states: podcasts, loading, error
- Search input (searchQuery)
- Genre filtering (selectedGenre)
- Sorting and pagination
- Render dynamic podcast cards and pagination controls

| Section | Purpose  |
|-----------|-----------|
| State Declarations | Manage app data, filters, pagination, and UI states |
| Filtering Logic | Filters podcasts by title and genre |
| Sorting Logic	 | Sorts by updated date, popularity, or creation date |
| Pagination| Slices the data array into smaller pages |
| Effects| Fetches podcasts on mount and resets pagination on new search |
| Render | Displays search bar, dropdown filters, loading/error states, and paginated results |

<br/>

#### 3. FavouritesPage.jsx
Displays the user’s saved podcast episodes.
Responsibilities:
- Provides a back navigation link to the home page
- Contains a SearchBar for quick filtering
- Displays a static or dynamic list of saved episodes 

| Element | Description  |
|-----------|-----------|
| Header | Contains back arrow (BsChevronLeft) and search bar |
| Main Section | Shows saved podcasts and their episodes |
| Episode Entries	 | Each includes title, date added, favorite icon, and play button |

<br/>

#### 4. PodcastDetails.jsx
Displays detailed information for a single podcast based on its id parameter.
Responsibilities:
- Fetch specific podcast data via fetchPodcastDeatils
- Display metadata (title, description, genres, last updated date)
- Render dynamic season and episode lists
- Handle loading and error states 

| Section | Purpose  |
|-----------|-----------|
| Header | Back navigation to the homepage |
| Podcast Info | Image, title, description, genres, updated date |
| Season Dropdown	 | Allows selecting a season |
| Episodes List | Displays all episodes for the selected season |


<br/>

#### 5. SearchBar.jsx
An input for filtering podcasts.
Responsibilities:
- Accepts two props: searchQuery and setSearchQuery
- Updates parent component’s state when user types
- Styled with a BsSearch icon

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
- Styling	CSS Modules / Custom Classes
- Icons	React Icons (Bootstrap & Ionicons)
- Date Formatting	date-fns
- API	Fetch API 

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

> Visit http://localhost:5173 (or your dev server port).

<br/>

#### License
This project is for educational use only.
