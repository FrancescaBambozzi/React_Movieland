import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {

    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster} alt="img" onClick={(e) => alert(e)} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;