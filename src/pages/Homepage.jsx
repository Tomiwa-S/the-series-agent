import React, { useState, useEffect } from "react";

import SlidingImages from "../components/SlidingImages";
import Navbar from "../components/Navbar";
import '../style.css';
import Footer from "../components/Footer";

function Homepage() {
    const [movies, setMovies] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowplaying, setNowplaying] = useState([]);
    const page =1;
    const baseurl = "https://the-series-agent-server.vercel.app";
    
    useEffect(() => {
      async function fetchMovies() {
        try {
          const response = await fetch(`${baseurl}/popularmovies/${page}`);
          const response_topRated = await fetch(`${baseurl}/toprated/${page}`);
          const response_upcomingMovies = await fetch(`${baseurl}/upcomingmovies/${page}`);
          const response_nowplaying = await fetch(`${baseurl}/nowplaying/${page}`)
          if (!response.ok || !response_topRated.ok || !response_upcomingMovies.ok || !response_nowplaying.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          const top_rated = await response_topRated.json();
          const upcoming =  await response_upcomingMovies.json();
          const nowplaying_data = await response_nowplaying.json();
          setMovies(data.data); // Update the movies state with the fetched data
          setTopRated(top_rated.data);
          setUpcomingMovies(upcoming.data);
          setNowplaying(nowplaying_data.data);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }
      
      fetchMovies(); // Call the fetchMovies function when the component mounts
    }, []);
  
    return (
      <div className="App">
        
            <Navbar/>
            <div className="container">
            <SlidingImages heading="Popular movies" all={movies.map(movie=>movie)} images={movies.map(movie=>movie.poster_path)} backdrop_path={movies.map(movie=>movie.backdrop_path)} id={movies.map(movie=>movie.id)} titles={movies.map(movie=>movie.title)}/>          
            
            <SlidingImages heading="Top Rated" all={topRated.map(movie=>movie)} images={topRated.map(movie=>movie.poster_path)} backdrop_path={topRated.map(movie=>movie.backdrop_path)} id={topRated.map(movie=>movie.id)} titles={topRated.map(movie=>movie.title)}/>
          
            <SlidingImages heading="Upcoming Movies" all={upcomingMovies.map(movie=>movie)} images={upcomingMovies.map(movie=>movie.poster_path)} backdrop_path={upcomingMovies.map(movie=>movie.backdrop_path)} id={upcomingMovies.map(movie=>movie.id)} titles={upcomingMovies.map(movie=>movie.title)}/>
    
            <SlidingImages heading="Now playing" all={nowplaying.map(movie=>movie)} images={nowplaying.map(movie=>movie.poster_path)} backdrop_path={nowplaying.map(movie=>movie.backdrop_path)} id={nowplaying.map(movie=>movie.id)} titles={nowplaying.map(movie=>movie.title)}/>
            
            </div>
            <Footer/>
      </div>
    );
  }
  
  export default Homepage;