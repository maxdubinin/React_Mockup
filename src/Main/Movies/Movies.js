import React, { useState, useEffect } from "react";
import Container from "../../Container/Container";
import MoviesBox from "./Movies-box";
import MoviesSearch from "./Movies-search";

const Movies = () => {
  console.log("start");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=8b47da7b&s=People"
    );
    if (!response.ok) {
      throw new Error(
        `Could not fetch http://www.omdbapi.com/?apikey=8b47da7b&s=People}, received ${response.status}`
      );
    }
    let data = await response.json();
    data = data.Search;
    setMovies(data);
    setSearchResult(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const search = (e) => {
    const search =
      movies &&
      movies.filter((item) => {
        return item.Title.toLowerCase().includes(e);
      });
    setSearchResult(search);
  };

  useEffect(() => {
    search(searchValue);
  }, [searchValue]);

  return (
    <section className="movies">
      <MoviesSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchInputChanges={handleSearchInputChanges}
        search={search}
      />
      <div className="movies-box">
        <Container>
          {isLoading && <div>Loading... </div>}
          {/*movies && <MoviesBox movies={movies} />*/}
          {searchResult && (
            <div className="movies-box__row movie-list">
              {searchResult.map((movie) => (
                <MoviesBox movie={movie} key={movie.imdbID} />
              ))}
            </div>
          )}

          <ul className="pagination">
            <li className="pagination__page"></li>
            <li className="pagination__allpages"></li>
            <li className="pagination__item pagination__item--prev">
              &lt;Prev
            </li>
            <li className="pagination__item pagination__item--next">
              Next&gt;
            </li>
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default Movies;
