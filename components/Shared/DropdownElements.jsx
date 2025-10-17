import { useFilter } from "./FilterContext";

/**
 * Dropdown component for selecting a podcast genre.
 *
 * @returns {JSX.Element} A select element for genre selection
 */
export function GenreDropdown({ genres }) {
  const { selectedGenre, setSelectedGenre } = useFilter();

  return (
    <select
      className="genres"
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      {genres.map((title) => (
        <option key={title} value={title}>
          {title}
        </option>
      ))}
    </select>
  );
}

/**
 * Dropdown component for selecting sorting options.
 *
 * @returns {JSX.Element} A select element for sorting selection
 */
export function SortDropdown() {
  const { sortOption, setSortOption } = useFilter();

  return (
    <select
      className="sort"
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="default">Default</option>
      <option value="az">A → Z</option>
      <option value="za">Z → A</option>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
}