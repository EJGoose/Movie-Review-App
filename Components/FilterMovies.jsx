import React from 'react'

//a simple component that accepts a rating, a filter handling function and a list of possible ratings and returns a of filters.
const FilterMovies = ({rating, handleFilter, ratingList}) => {
  return (

        <ul className="centre-element movie-filter">
            <li>{"User Rating: "}</li>
            {ratingList.map((rateItem, index)=>(<li key={index} className={rating== rateItem ? "movie-filter-item active" : "movie-filter-item"} onClick={()=>handleFilter(rateItem)}>{rateItem}+</li>))}
        </ul>

  )
}

export default FilterMovies
