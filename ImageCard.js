// components/ImageCard.js
import React from "react";
export default function ImageCard({ image, onFavorite }) {
  return (
    <div className="card">
      <img src={image.url} alt={image.title} loading="lazy" className="image" />
      <h3>{image.title}</h3>
      <p>{image.date}</p>
      <div className="actions">
        <button onClick={() => onFavorite(image)}>❤️ Favorite</button>
      </div>
    </div>
  );
}
