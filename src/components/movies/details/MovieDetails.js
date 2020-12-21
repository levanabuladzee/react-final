import React, { useState, useEffect, Fragment } from 'react';
import Footer from '../../footer/Footer';
import MovieDetailsComponent from './details-component/MovieDetailsComponent';
import './movie-details.css';

const api = "https://api.tvmaze.com/shows";

export const MovieDetails = (props) => {
    const [movie, setMovie] = useState(undefined);

    useEffect(() => {
        fetch(api + `/${props.match.params.movieId}`)
        .then(res => res.json())
        .then(
            (result) => {
            let data = result
            console.log(data);
            setMovie(data);
            },
            (error) => {
            console.log(error);
            }
        )
    }, [setMovie, props.match.params.movieId])

    const fetchedMovie = movie !== undefined ? <MovieDetailsComponent movie={movie} /> : '';

    return (
        <Fragment>
            <div className="movie-details">
                {fetchedMovie}
            </div>
            <Footer />
        </Fragment>
    )
}

export default MovieDetails;