import React, { Fragment } from 'react';
import './movie-details-component.css';

const MovieDetailsComponent = (props) => {
    const movie = props.movie;
    const genres = movie.genres.map(element => {
        return element + " "
    })

    return (
        <Fragment>
            <div className="movie-wrapper">
                <img style={{width: '384px', padding: '16px'}} className="movie-img" src={movie.image.original} alt={movie.name} />
                <div style={{margin: 'auto'}} className="movie-details">
                    <h1 style={{textAlign: 'center', color: '#e50914'}} className="movie-name">{movie.name}</h1>
                    <div className="movie-summary" dangerouslySetInnerHTML={{__html: movie.summary}} style={{padding: '4px 64px', textAlign: 'center'}}></div>
                    <div style={{textAlign: 'center', marginTop: '64px'}} className="movie-genre">Genres: {genres}</div>
                    <div style={{textAlign: 'center', color: '#f6d70b', marginTop: '80px'}} className="movie-rating">Rating: {movie.rating.average === null ? '0.0' : movie.rating.average} &#9733;</div>
                </div>
            </div>
        </Fragment>
    )
}

export default MovieDetailsComponent;