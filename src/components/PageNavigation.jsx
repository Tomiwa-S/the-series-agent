import React, { useEffect } from "react";
function PageNavigation(props){
  const PageNavigation=({Page})=>{
    useEffect(() => {
      // Listen for changes to the currentPage prop
      Page.onChange((newPage) => {
        // Update the state variable in the parent component
        props.setPage(newPage);
      });
    }, [Page]);
  }
  const maxPage = props.maxPage;
 
    return (<div style={{textAlign:"center", margin:"auto"}}>
        <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
      <li className="page-item"><a className="page-link" onClick={() => {props.page>1&&props.setPage(props.page - 1)}}>Previous</a></li>
      {props.page-1!==0&&(<li className="page-item"><button className="page-link">{props.page-1}</button></li>)}
      
      <li className="page-item"><a className="page-link">{props.page}</a></li>
      {props.page!==maxPage&&(<li className="page-item"><button className="page-link">{props.page+1}</button></li>)}
      
      <li className="page-item"><a className="page-link" onClick={() =>{props.page<maxPage&&props.setPage(props.page + 1)}}>Next</a></li>
    </ul>
  </nav>
    </div>);
}
export default PageNavigation;