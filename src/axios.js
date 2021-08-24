import axios from 'axios';


//https://api.themoviedb.org/3/movie/550?api_key=d7a5fd63fac30eb01658182a3439a979 

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default instance;