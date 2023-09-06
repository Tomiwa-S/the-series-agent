import React, { useState, useEffect } from "react";


function StreamLinks(props){
    const type = "movie";
    const baseurl = "https://the-series-agent-server.vercel.app";
    const url = `${baseurl}/stream/${type}/${props.id}`;
    const [data, setData] = useState({});
    useEffect(() => {
        async function Links() {
          try {
            const fetchData = await fetch(url);
            if (!fetchData.ok) {
              throw new Error("Network response was not ok");
            }
            const response = await fetchData;
            const use = await response.json()
            setData(use);
            
          } catch (error) {
            console.error("Error fetching movies:", error);
          }
        }
        
        Links();
      }, []);
      const services = Object.keys(data);
    return <div className="container" style={{padding:"4rem", height:"auto", backgroundColor:"red"}}>
        <h3 style={{color:"rgb(0, 0, 0)"}}>Watch now on</h3>
        {services.map((service, serviceIndex) => (
  <div className="h-100" key={serviceIndex}>
    <h4 style={{color:"rgb(0, 128, 0)"}}>{service}:</h4>
    {data[service].map((link, index) => (
      <span key={index}>
        <a href={link} className="h6">Link {index + 1}</a>
        {index < data[service].length - 1 && " || "}
      </span>
    ))}
  </div>
))}


            </div>

}

export default StreamLinks;