import React, {useState} from "react";
import logo from "../assets/the_series_agent_smaller.png";

function Navbar(){
    
  const [inputValue, setInputValue] = useState(""); // Initialize state for the input value

  function handleSubmission(e){
    const input = document.getElementById("inp")
      e.preventDefault();
      if(inputValue.trim()===""){
        input.placeholder = "Enter a movie title"
        // setInputValue("Enter a movie title");
        console.log("Empty");
      }
      else{
        const query = encodeURIComponent(input.value);
        const rootUrl = window.location.origin;
        const url = `${rootUrl}/search/${query}`;
        window.location.href= url;
      }
  }

    return (<nav className="navbar sticky-top" style={{ backgroundColor:"#000"}}>
    <div className="container-fluid mynav">
    <div className="row align-items-center">
      <span className="navbar-brand mb-0 h1">
      <img src={logo} alt="logo" width="320" height="60"/>
      </span>
      
    </div><form className="d-flex col-3 col-md-3 col-sm-3" id="search" role="search" onSubmit={(e)=>{e.preventDefault();handleSubmission(e);}} style={{paddingRight:"40%"}}>
        <input className="form-control me-2" id="inp" value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} type="search"  placeholder="Find favourite movies" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form></div>
  </nav>);
}
export default Navbar;