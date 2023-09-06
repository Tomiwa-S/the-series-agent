import React from "react";

import {
  Link,
} from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function SlidingImages(props){
    function slide(direction){
      const images = document.getElementById("div"+`${props.id}`);
      const scrollPercentage = 50; // Scroll by 10%
      const scrollAmount = (images.clientWidth * scrollPercentage) / 100;

      if(direction==="next"){
        images.scrollBy(scrollAmount,0)
      }
      else{
        images.scrollBy(-scrollAmount,0)
      }    
    }
  
    return (<div className="container"  style={{marginBottom:"80px"}}><h2>{props.heading+":"}</h2><div className="image-container carousel slide" id={"div"+`${props.id}`}>
    <button className="carousel-control-prev carouselbtn prev" onClick={(e)=>slide("prev")} type="button" data-bs-target={"#div"+`${props.id}`} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
    {props.images.map((x,index)=><div key={props.id[index]} id={props.id[index]} >
    <Link to="/moviedetails" state={{ url: props.backdrop_path[index], all:props.all[index] }}><img className="poster"  src={`${baseUrl}${x}`}  alt="..." /></Link>
    <p className="image-title">{props.titles[index]}</p>
    

    


    </div>)}
    
  <button className="carousel-control-next carouselbtn next" onClick={(e)=>slide("next")} type="button" data-bs-target={"#div"+`${props.id}`} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

    </div>
    
    

    <Link to="movielist" state={{all:props.all, heading:props.heading}}>
    <button type="button" className="btn btn-outline-danger" style={{position:"absolute", right:"9dvw"}}>Explore more</button>
    </Link>
    
    
  </div>)
}
export default SlidingImages;