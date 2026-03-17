import React, { useState, useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos()
      .then((data) => {
        console.log(data.results);
        setMovieList(data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  };

  return (
    <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide">
      {/* Show movie list on screen */}
      {movieList.map((item) => (
        <img
          src={IMAGE_BASE_URL + item.backdrop_path}
          key={item.id}
          alt={item.title || item.name}
          className="min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md"
        />
      ))}
    </div>
  );
};

export default Slider;
