import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import Header from "./components/Header";
import { Login } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={PostList} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </>
  );
}

export default App;
