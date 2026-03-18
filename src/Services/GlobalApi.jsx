import axios from "axios";
const BASE_URL="https://api.themoviedb.org/3"
const API_KEY="7a01efd1f352217d83f9b1c924dc0af6"

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

async function getTrendingVideos() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    return response.data;
  } 
  catch (error) {
    console.log("Error fetching trending videos", error);
    return null;
  }
}

async function getMovieByGenreId(genreId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    return response.data;
  } 
  catch (error) {
    console.log("There was an error getting movies by genre ID", error);
    return null;
  }
}

// What to access anywhere in the application
export default { getTrendingVideos, getMovieByGenreId };
