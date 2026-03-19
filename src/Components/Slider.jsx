import React, { useState, useEffect, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {

  // Create state for showing movie list
  const [movieList, setMovieList] = useState([]);

  // Ref to the movie slider container for scrolling with chevrons
  const elementRef = useRef();

  // Display trending movies on mount
  useEffect(() => {
    getTrendingMovies();
  }, []);

// Fetch trending movies from API and save to state
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

  // Chevron scroll f'ns: take up full width of the screen while leaving 110 px on either end to show the next/previous movie cards for UX

  const sliderRight = (element)=> {
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft = (element)=> {
    element.scrollLeft-=screenWidth-110
  }

  return (
    <div className="relative w-full"> 

      {/* Chevron buttons to scroll the slider left and right */}
      <HiChevronLeft className="hidden md:block text-white text-[30px] absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer " onClick={()=>sliderLeft(elementRef.current)}/>
      <HiChevronRight className= "hidden md:block text-white text-[30px] absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer "  onClick={()=>sliderRight(elementRef.current)}/>

        {/* Hero movie cards (horizontally scrollable) */}
    <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
   
      {movieList.map((item) => (
        <img
          src={IMAGE_BASE_URL + item.backdrop_path}
          key={item.id}
          alt={item.title || item.name}
          className="min-w-full  lg:h-[600px] sm:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px]
          border-gray-400 transition-all duration-100 ease-in"
        />
      ))}
    </div>
     </div>
  );
};

export default Slider;
