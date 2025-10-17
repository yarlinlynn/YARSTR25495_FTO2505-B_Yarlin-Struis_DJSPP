import { createContext, useContext, useState } from "react";

/**
 * Context for managing filter state (genre and sorting).
 */
const FilterContext = createContext();

/**
 * Provider component to wrap parts of the app that need filter state.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Children components that will have access to filter context
 * @returns {JSX.Element} FilterProvider wrapping its children
 */
export function FilterProvider({ children }) {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  return (
    <FilterContext.Provider
      value={{
        selectedGenre,
        setSelectedGenre,
        sortOption,
        setSortOption,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

/**
 * Custom hook to access the filter context.
*/
export function useFilter() {
  return useContext(FilterContext);
}
