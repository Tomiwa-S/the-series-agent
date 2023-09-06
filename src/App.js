import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import "./style.css";
import MovieList from "./pages/MovieList";
import SearchResult from "./pages/SearchResult";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage/>
    ),
  },
  {
    path: "/moviedetails",
    element: <MovieDetail/>,
  },
  {
    path: "/movielist",
    element: (
      <MovieList/>
    ),
    
  },
  {
    path: "/search/:query",
    element: (
      <SearchResult/>
    ),
    
  },
]);
function App() {

  return (

    <RouterProvider router={router} />

  );
}

export default App;