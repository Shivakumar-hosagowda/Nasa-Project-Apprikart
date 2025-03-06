// utils/localStorage.js
export const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };
  
  export const toggleFavorite = (image) => {
    let favorites = getFavorites();
    if (favorites.some((fav) => fav.date === image.date)) {
      favorites = favorites.filter((fav) => fav.date !== image.date);
    } else {
      favorites.push(image);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  
  
  
  
  
  
  
  
  