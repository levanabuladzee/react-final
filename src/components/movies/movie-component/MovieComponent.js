import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './movie-component.css';

const MovieComponent = (props) => {
    return (
        <Fragment>
            <h1 style={{textAlign: 'center', color: '#e50914'}} className="movies-genre">{props.header}</h1>
            <div className="movie-wrapper">
                {props.movies.map((movie, index) => {
                    return <div className="tile" key={movie.id}>
                        <div className="tile-media">
                            <Link to={`/movies/${movie.id}`}><img className="tile-img" src={movie.image.medium} alt={movie.name} /></Link>
                        </div>
                        <div className="tile-details">
                            <div className="tile-title">
                                {movie.name}
                            </div>
                        </div>

                        <div className="tile-like">
                            <button className="like-button" onClick={function addFav() {
                                props.like();
                            }}>React</button>
                        </div>
                    </div>
                    })}
            </div>
        </Fragment>
    )
}

export default MovieComponent;