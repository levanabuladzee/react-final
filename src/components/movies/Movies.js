import React, { useState, useEffect, Fragment, useCallback } from 'react';
import Footer from '../footer/Footer';
import MovieComponent from './movie-component/MovieComponent';
import './movies.css';

const api = "http://api.tvmaze.com/shows";

export const Movies = () => {
    const [page, ] = useState(1);
    const [movies, setMovies] = useState(undefined);
    const [likes, setLikes] = useState(0);
    const [change, setChange] = useState(false);

    useEffect(() => {
        fetch(api + `?page=${page}`)
        .then(res => res.json())
        .then(
            (result) => {
            let data = result
            console.log(data);
            setMovies(data);
            },
            (error) => {
            console.log(error);
            }
        )
    }, [page, setMovies])

    const addLikes = useCallback(() => {
        setLikes(likes + 1);
        if (likes === 11) {
            setChange(true);
        }
      }, [setLikes, likes, setChange]);

    const dramaMovies = movies !== undefined ? movies.filter((el) => {
        return el.genres.includes('Drama');
    }) : [];

    const actionMovies = movies !== undefined ? movies.filter((el) => {
        return el.genres.includes('Action');
    }) : [];

    const comedyMovies = movies !== undefined ? movies.filter((el) => {
        return el.genres.includes('Comedy');
    }) : [];

    const fetchedDramaMovies = movies !== undefined ? <MovieComponent like={addLikes} movies={dramaMovies.slice(0, 20)} header={"Drama"} /> : '';
    const fetchedActionMovies = movies !== undefined ? <MovieComponent like={addLikes} movies={actionMovies.slice(20, 40)} header={"Action"} /> : '';
    const fetchedComedyMovies = movies !== undefined ? <MovieComponent like={addLikes} movies={comedyMovies.slice(40, 60)} header={"Comedy"} /> : '';

    return (
        <Fragment>
            <div className="movies">
                {!change && <h1 style={{textAlign: 'center'}}>Reacts: {likes}</h1>}
                {change && <h1 style={{textAlign: 'center', color: '#f6d70b'}}>Reacts: {likes}</h1>}
                {fetchedDramaMovies}
                {fetchedActionMovies}
                {fetchedComedyMovies}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Movies;