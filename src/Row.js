import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios'


function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])
    console.log(movies);
    return (
        <div className='row'>
            <h1 className='row__title'>{title}</h1>
            <div className="row__posters">
                {movies?.slice(0, 10).map((movie) =>
                    <img className='row__poster' key={movie.id} src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                )}
            </div>
        </div>
    )
}

export default Row



/*


import React, { useEffect, useState } from 'react';
import './Row.css'
import axios from './axios'

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);
    return (
        <div className='row'>
            <h2 className='row__title'>
                {title}
            </h2>

            <div className="row__posters">
                {movies.map(
                    (movie) =>
                        <img
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                )}
            </div>
        </div>
    )
}

export default Row
*/


    // ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) && (
    //     <img
    //         className={`row__poster ${isLargeRow && "row__posterLarge"}`}
    //         key={movie.id}
    //         src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
    // ))