import React, { useState, useEffect } from "react";
import Container from "../../Container/Container";
import MoviesBox from "./Movies-box";
import MoviesSearch from "./Movies-search";
import Pagination from "./Pagination";

const Movies = () => {
  console.log("start");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // currentPage всегда должен быть const
  let [currentPage, setCurrentPage] = useState(1);
  // если нужна какая то константа и ты не собираешся ее менять то лучше создавать просто константу за пределами компонета
  const [moviesPerPage] = useState(9);

  // в целом все правильно, но лучше создать универсальную функцию для fetch в которую ты сможешь передавать любой урл и
  // которая будет возвращать тебе уже готовый json
  // Пример отправки POST запроса:
  // async function postData(url = '', data = {}) {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *client
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return await response.json(); // parses JSON response into native JavaScript objects
  // }
  //
  // postData('https://example.com/answer', { answer: 42 })
  //     .then((data) => {
  //       console.log(data); // JSON data parsed by `response.json()` call
  //     });
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

  // Get current movies
  const indexOfLastMovies = currentPage * moviesPerPage;
  const indexOfFirstMovies = indexOfLastMovies - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovies, indexOfLastMovies);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const search = (e) => {
    const search =
      currentMovies &&
      currentMovies.filter((item) => {
        return item.Title.toLowerCase().includes(e);
      });
    setSearchResult(search);
  };

  // useEffect(() => {
  //   search(searchValue);
  // }, [searchValue]);

  const getSearch = currentMovies.filter((item) => {
    return item.Title.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  // Pagination
  // логику эту лучше запихнуть в компонент пагинации, чтоб все было в одном месте
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateNext = () => {
    if (currentPage === pageNumbers.length) {
      return;
    }
    setCurrentPage((prevPage) => {
      return prevPage + 1;
    });
  };

  const paginatePrev = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prevPage) => {
      return prevPage - 1;
    });
  };

  return (
    <section className="movies">
      {/*MoviesSearch компонент должен делать новый запрос чтоб вытащить новые данные
       http://www.omdbapi.com/?apikey=8b47da7b&s=People вот в этой урле People должна быть динамической переменной
       которая будет передаваться из инпута
       */}
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

          {/* <div className="movies-box__row movie-list">
            {currentMovies.map((movie) => (
              <MoviesBox movie={movie} key={movie.imdbID} />
            ))}
          </div> */}

          {getSearch && (
            <div className="movies-box__row movie-list">
              {getSearch.map((movie) => (
                <MoviesBox movie={movie} key={movie.imdbID} />
              ))}
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            currentMovies={currentMovies}
            movies={movies}
            paginateNext={paginateNext}
            paginatePrev={paginatePrev}
            moviesPerPage={moviesPerPage}
          />
        </Container>
      </div>
    </section>
  );
};

export default Movies;
