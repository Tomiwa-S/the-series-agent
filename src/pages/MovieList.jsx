import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import '../style.css';
import MovieItem from "../components/MovieItem";
import { useLocation } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import Footer from "../components/Footer";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [page,setPage] =  useState(1);
    const [maxPage, setMaxPage] = useState(1)
    let location = useLocation();
    const type = location.state.heading.toLowerCase().replace(/\s/g, '');
    const baseurl = "https://the-series-agent-server.vercel.app";
    useEffect(() => {
      async function fetchMovies() {
        try {
          const response = await fetch(`${baseurl}/${type}/${page}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setMaxPage(data.message);
          setMovies(data.data); // Update the movies state with the fetched data
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }
      
      fetchMovies(); // Call the fetchMovies function when the component mounts
    }, [page]);
  
    return (
      <div>
        
            <Navbar/>
            <div className="container" style={{paddingTop:"2%"}}><h3>{location.state.heading}</h3></div>
            <div className="container d-flex flex-wrap" style={{textAlign:"center"}}>
            {movies.map(movie=>(<MovieItem key={movie.id} all={movie} release_date={movie.release_date} poster_path={movie.poster_path} title={movie.title} genre_ids={movie.genre_ids}/>))}
            
            </div>
            <PageNavigation maxPage={maxPage} page={page} setPage={setPage} />
            <Footer/>
      </div>
    );
  }


export default MovieList;