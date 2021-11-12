import React, {useState, useEffect } from "react";
import Container from "../../Container/Container"
import MoviesBox from "./Movies-box";
import MoviesSearch from "./Movies-search";

;


const Movies = () => {

    const [movies, setMovies] = useState([]);

    const fetchData = async() => {
      const response = await fetch('http://www.omdbapi.com/?apikey=8b47da7b&s=People');
      if(!response.ok) {
          throw new Error(`Could not fetch http://www.omdbapi.com/?apikey=8b47da7b&s=People}, received ${response.status}`)
        }
        const data = await response.json();
        setMovies(data.Search);
    };
  
    useEffect(() => {
      fetchData();
      console.log(movies);
    }, []);

    // useEffect(() => {
    //     // const results = movies.filter(item => 
    //     //      item.Title.toLowerCase().includes(searchTerm));
    //     //console.log(movies);

    //     console.log(movies.filter(item => item.Title))
    //     //setSearchResult(results);
    // }, [searchTerm]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleChange =(e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const showResult = movies.filter(item => 
            item.Title.toLowerCase().includes(searchTerm));
        console.log(movies);
        setSearchResult(showResult);

    }, [searchTerm]);
 

    return (
            <section className="movies">
                <MoviesSearch searchTerm = {searchTerm} handleChange ={handleChange}/>
                <div className="movies-box">
                    <Container>
                        {
                           
                            <MoviesBox movies={movies} />
                        }
                        
                        <ul className="pagination">
                            <li className="pagination__page"></li>
                            <li className="pagination__allpages"></li>
                            <li className="pagination__item pagination__item--prev">&lt;Prev</li>
                            <li className="pagination__item pagination__item--next">Next&gt;</li>
                        </ul>
                    </Container>
                </div>
        </section>
    );
}

export default Movies;