import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

const MovieList = ({ genreId }) => {
    const elementRef = useRef();
    const [movieList, setMovieList] = useState([])

    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const sliderRight = (element)=> { element.scrollLeft += 500 }
    const sliderLeft = (element)=> { element.scrollLeft -= 500 }

    const getMovieByGenreId = ()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            setMovieList(resp.results)
        })
    }

    return (
        <div className="relative">
            {/* Left Chevron */}
            <IoChevronBackOutline 
                className="hidden md:block text-white text-[50px] p-2 cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 z-10 hover:scale-110 transition-transform"
                onClick={()=>sliderLeft(elementRef.current)}
            />

            {/* Slider */}
            <div className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-5 pb-5 z-0 scroll-smooth" ref={elementRef}>
                {movieList.map((item)=>(
                    <MovieCard key={item.id} movie={item} />
                ))}
            </div> 

            {/* Right Chevron */}
            <IoChevronForwardOutline 
                className="hidden md:block text-white text-[50px] p-2 cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 z-10 hover:scale-110 transition-transform"
                onClick={()=>sliderRight(elementRef.current)}
            />
        </div>
    )
}

export default MovieList