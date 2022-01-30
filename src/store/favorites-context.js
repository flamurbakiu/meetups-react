import { useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addToFavorites: (meetup) => {},
  removeFromFavorites: (id) => {},
  itemIsFavorite: (id) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addToFavoritesHandler = (newMeetup) => {
    setUserFavorites((prevMeetup) => [...prevMeetup, newMeetup]);
  };

  const removeFromFavoritesHandler = (id) => {
    const newFavorites = userFavorites.filter((meetup) => meetup.id !== id);
    setUserFavorites(newFavorites);
  };

  const itemIsFavoriteHandler = (id) => {
    return userFavorites.some((meetup) => meetup.id === id);
  };

  const favCtx = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addToFavorites: addToFavoritesHandler,
    removeFromFavorites: removeFromFavoritesHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={favCtx}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
