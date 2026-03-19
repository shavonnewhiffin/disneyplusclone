import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import LongMovieCard from "./LongMovieCard";

const MovieList = ({ genreId, index }) => {
  const elementRef = useRef();
  const [movieList, setMovieList] = useState([]);

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      // Filter out movies without posters before saving to state
      const moviesWithPosters = resp.results.filter(
        (item) =>     (item.poster_path || item.backdrop_path) &&
        item.original_title !== "Schüleraustausch"
    )
      setMovieList(moviesWithPosters);
    });
  };

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  return (
    <div className="relative">
      {/* Left Chevron */}
      <IoChevronBackOutline
        className="hidden md:block text-white text-[50px] p-2 cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 z-10 hover:scale-110 transition-transform"
        onClick={() => sliderLeft(elementRef.current)}
      />

      {/* Slider */}
      <div
        className="flex overflow-hidden gap-8 scrollbar-hide pt-5 px-5 z-0 scroll-smooth
        "
        ref={elementRef}
      >
        {movieList.map((item) => (
            index % 3 == 0 ? (
              <LongMovieCard key={item.id} movie={item} className="pb-1"/>
            ) : (
              <MovieCard key={item.id} movie={item} className="pb-2 last:pb-8" />
            )
        ))}
      </div>

      {/* Right Chevron */}
      <IoChevronForwardOutline
        className="hidden md:block text-white text-[50px] p-2 cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 z-10 hover:scale-110 transition-transform"
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;