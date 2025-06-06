import React, { useEffect, useState } from 'react'
import "../CSS/Movie.css"
import { WatchMovies } from './WatchMovies'
import FilterMovies from './FilterMovies'
import YourAPIKey from './AddYourAPIKeyHere'
const API_KEY = YourAPIKey
const BASE_URL = "https://api.themoviedb.org/3"

//set state
const Movie = () => {
    const [movieData, setMovieData] = useState([])
    const [filtered, setFiltered] =useState([])
    const [rating, setRating] =useState(0)
    
    //calls fetch movies on the first render
    useEffect(()=>{
        fetchMovies();     
    },[])

    // asynchronous function that fetches data from the themoviedb.org
    const fetchMovies = async()=>{
        const res= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
        const data = await res.json() 
        setMovieData(data.results);
        setFiltered(data.results);
    };
    //filters the list of movies displayed below
    const handleFilter = (rate)=> {
        //This first part resets the list if someone presses the button again.
        if (rate === rating) {
            setRating(0)
            setMovieData(filtered)
        } else {
            setRating(rate);
            const filteredMovies = filtered.filter((movie)=>movie.vote_average >= rate)
            setMovieData(filteredMovies)
        }
    }

  return (
    <div className='movie-list'>
        <section className='movieheader'>
            <div className='centre-element movie-listadd'>
                <FilterMovies rating={rating} handleFilter={handleFilter} ratingList={[8,7,6,5]}/>
                <select name="" id="" className="movie-sorting">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                </select>  
            </div>
        </section>
        <div className='movie-grid'>
             {movieData.length>0 ? (movieData.map((movie)=>(
                <WatchMovies 
                  moviedata={movie}
                  key={movie.id} 
                />
            ))):(<p className='movieheader'>No movies found, matching current criteria</p>)}
        </div>
    </div>
  )
}

export default Movie
