import "./App.css";
import React from "react";

import PostList from "./PAGE/PostList";
import Login from "./PAGE/Login";
import Register from "./PAGE/Register";
import Post from "./PAGE/Post";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={PostList}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/post" exact component={Post}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
