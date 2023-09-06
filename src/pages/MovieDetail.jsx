import React from "react";
import Navbar from "../components/Navbar";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    useLocation,
  } from "react-router-dom";
import '../style.css';
import StreamLinks from "../components/StreamLinks";
import Footer from "../components/Footer";
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
function MovieDetail(){
    let location = useLocation();
    const link = location.state.all.backdrop_path;
    // console.log(url);
    const style = {
        backgroundImage: `url(${link})`, // Specify the background image URL
        backgroundSize: 'cover', // Make the background cover the entire div
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat',
      };
      
      
    return (<div>
        <Navbar/>
        <div className="movie-detail-image" style={style}>
            <div className="overlay"></div>
            
            <div className="text">
            <p>{location.state.all.adult?"18+":"PG"+" || "+location.state.all.release_date.substr(0,4)+" || "
            + getGenreNamesByIds(location.state.all.genre_ids).join(", ")
            }</p>
            <h3>{location.state.all.title}</h3><p id="overview" style={{paddingLeft:"0.4rem"
            ,paddingBottom:"5px"}}>{location.state.all.overview}</p></div>
        </div>
        <div className="container">
            <StreamLinks id={location.state.all.id}/>
        </div>
        <Footer/>
    </div>)
}

export default MovieDetail;