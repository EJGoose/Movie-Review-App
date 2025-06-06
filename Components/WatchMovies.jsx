import React from 'react'
import '../CSS/WatchMovies.css'
import star from '../assets/star-fill.svg'
import propTypes from "prop-types"

//takes data about the movie and returns a card containing all the movie data
export const WatchMovies = ({moviedata}) => {
  return (
        // link to the movie details page
        <a href={`https://www.themoviedb.org/movie/${moviedata.id}`} target="_blank" className='movie-show'>
            {/*link to find the image*/}
            <img src={`https://image.tmdb.org/t/p/w500${moviedata.poster_path}`} className='movie-img' alt={moviedata.title}/>
            <div className='movie-details'>
                <h3 className="movie-details-h3">{moviedata.title}</h3>
                <div className='centre-element moviedate'>
                    <p>{moviedata.release_date}</p>
                    {/*add in rating followed by star emoji*/}
                    <p>{moviedata.vote_average}{""}<img className="emojis" src={star}/></p>
                </div>
                {/*Movie description is cut short after a 100 characters*/}
                <p className="moviedesc">{moviedata.overview.slice(0,100)+"..."}</p>
            </div>
        </a>
  )
};

//typecheck the properties of watchmovies
WatchMovies.propTypes={
    moviedata: propTypes.shape({
        id:propTypes.number.isRequired,
        poster_path:propTypes.string,
        title:propTypes.string.isRequired,
        release_date:propTypes.string,
        vote_average:propTypes.number,
        overview:propTypes.string,
    }).isRequired,
}


