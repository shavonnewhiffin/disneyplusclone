import axios from "axios";

async function getTrendingVideos () {
   try { 
    const response = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=7a01efd1f352217d83f9b1c924dc0af6");
   return response.data; }
   catch (error) {
    console.log("Error fetching trending videos", error);
    return null;

   }
} 

// What to access anywhere in the application
export default { getTrendingVideos };