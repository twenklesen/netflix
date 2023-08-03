
import React from "react";
import {BrowserRouter , Routes, Route}from "react-router-dom"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Netflix from "./Pages/Netflix";
import Player from "./Pages/Player";
import Movies from "./Pages/Movies";
import TVShows from "./Pages/TVShows";
import UserLiked from "./Pages/UserLiked";
function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route exact path="/login" element={<Login/>} />
  <Route exact path="/signup" element={<Signup/>} />
  <Route exact path="/player" element={<Player/>} />
  <Route exact path="/movies" element={<Movies/>} />
  <Route exact path="/tv" element={<TVShows/>} />
  <Route exact path="/mylist" element={<UserLiked/>} />

  <Route exact path="/" element={<Netflix/>} />
 </Routes>
 </BrowserRouter>
    
  );
}

export default App;
