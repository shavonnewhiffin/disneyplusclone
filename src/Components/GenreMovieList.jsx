import React from 'react'
import GenresList from './Constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div>
        {GenresList.genre.slice(0,5).map((item, index)=>(
            <div className="p-8 px-8 md:px-16 first:pb-1 last:pb-20" key={item.id}>
                <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
                <MovieList genreId={item.id} index = {index} />
            </div>

        ))}
    </div>
  )
}

export default GenreMovieList