import React from "react";
import { Link } from "react-router-dom";
import noimage from "../assets/noimage.jpg";
function MovieItem(props) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const genreData = {
    "Action": 28,
    "Adventure": 12,
    "Animation": 16,
    "Comedy": 35,
    "Crime": 80,
    "Documentary": 99,
    "Drama": 18,
    "Family": 10751,
    "Fantasy": 14,
    "History": 36,
    "Horror": 27,
    "Music": 10402,
    "Mystery": 9648,
    "Romance": 10749,
    "Science Fiction": 878,
    "TV Movie": 10770,
    "Thriller": 53,
    "War": 10752,
    "Western": 37
  };

  function getGenreNamesByIds(genreIds) {
    const matchingGenres = Object.keys(genreData).filter(genreName =>
      genreIds.includes(genreData[genreName])
    );
    return matchingGenres;
  }

  function imagesrc(){
    if(props.poster_path===null){
      return noimage;
    }
    return `${baseUrl}${props.poster_path}`
  }

  

  return (
    <div className="image-container card mb-3 col-lg-3 col-md-4 col-sm-6" style={{ width: "18rem", color:"white", margin:"auto"}}>
      <img src={imagesrc()} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{width:"100%"}}>{props.title}</h5>
        <p className="card-text">{getGenreNamesByIds(props.genre_ids).join(', ')}</p><Link to="/moviedetails" state={{all:props.all}}>
        <button type="button" className="btn btn-outline-danger">Watch now</button></Link>
      </div>
    </div>
  );
}

export default MovieItem;
