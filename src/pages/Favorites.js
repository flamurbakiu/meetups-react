import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favCtx = useContext(FavoritesContext);

  let content =
    favCtx.totalFavorites === 0 ? (
      <p>You got no favorites yet. Start adding some?</p>
    ) : (
      <MeetupList meetups={favCtx.favorites} />
    );
  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
