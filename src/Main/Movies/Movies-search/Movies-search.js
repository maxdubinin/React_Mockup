
import React from "react";

import Container from "../../../Container";

const MoviesSearch = ({searchTerm, handleChange}) => {

    return(
        <div className="movies-top">
        <Container>
            <div className="movies-top__row movies-top__row--mb">
                <div className="movies-top__column">
                <h3 className="movies-top__heading">Explore Movies
                    & Series</h3>
                </div>
                <div className="movies-top__column movies-top__column--big">
                    <form action="#" className="movies-top__form" method="get">
                        <input id="search" type="search" className="movies-top__search" placeholder="Search..." data-list=".movie-list"
                        value={searchTerm} onChange={handleChange} />
                        <span className="icon-search movies-top__icon"></span>
                    </form>
                </div>
            </div>
        </Container>
    </div>
    );
}

export default MoviesSearch;