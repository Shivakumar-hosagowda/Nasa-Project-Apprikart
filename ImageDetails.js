// components/ImageDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toggleFavorite } from "../utils/localStorage";

export default function ImageDetails() {
  const { date } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, [date]);

  if (!image) return <p>Loading...</p>;

  return (
    <div className="details">
      <h1>{image.title}</h1>
      <p>{image.date}</p>
      {image.media_type === "image" ? (
        <img src={image.url} alt={image.title} />
      ) : (
        <iframe src={image.url} height="400"></iframe>
      )}
      <p>{image.explanation}</p>
      <button onClick={() => toggleFavorite(image)}>❤️ Favorite</button>
    </div>
  );
}
