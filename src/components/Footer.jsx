import React from "react";
import { Link } from "react-router-dom";

function Footer(){

    return (<div className="container" style={{color:"white"}}>
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3"><Link to="/" style={{textDecoration:"none"}}>
        <li className="nav-item"><button className="nav-link px-2" style={{color:"white"}}>Home</button></li></Link>
       
      </ul>
      <p className="text-center" style={{color:"white"}}>&copy; {new Date().getFullYear()} The Series Agent, Inc</p>
    </footer>
  </div>);
}
export default Footer;