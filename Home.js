// pages/Home.js
import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import { toggleFavorite } from "../utils/localStorage";

export default function Home() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const filteredImages = images.filter((img) =>
    (img.title.toLowerCase().includes(search.toLowerCase()) ||
      img.date.includes(search)) &&
    (filter === "all" || img.media_type === filter)
  );

  return (
    <div>
      <h1>NASA Astronomy Gallery</h1>
      <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="image">Images</option>
        <option value="video">Videos</option>
      </select>
      <div className="grid">
        {filteredImages.map((image) => (
          <ImageCard key={image.date} image={image} onFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  );
}