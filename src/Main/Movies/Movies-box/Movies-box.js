//import React, {useState, useEffect } from "react";

//import ApiService from '../../api-service'

 const MoviesBox = ({movies}) => {
     
    return(
        <div className="movies-box__row movie-list">
            {/* Второй способ
                {movies && movies.map() }
            */}
            {movies.map((movie) => (
                <div className="movies-box__column" key={movie.imdbID}>
                    <a className="movies-box__item"  style={{background: `url('${movie.Poster}') 0 0/cover no-repeat`}}>
                    <h3 className="movies-box__title">{movie.Title}</h3>
                    <div className="movies-box__desc">
                        <p className="movies-box__type">
                            {movie.Type}
                        </p>
                        <p className="movies-box__year">
                            {movie.Year}
                        </p>
                    </div>
                </a>
            </div>
            ))}
        </div>
    );

}

export default MoviesBox;