import { createContext, useState, useEffect } from "react";

// Create the context
export const FavouritesContext = createContext();

// Create the provider component
export const FavouritesProvider = ({ children }) => {

 const [favourites, setFavourites] = useState(null); 

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(stored);
  }, []);

  useEffect(() => {
    if (favourites !== null) {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  }, [favourites]);

  if (favourites === null) return null;

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};
