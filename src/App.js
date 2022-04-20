import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import PostList from "./pages/PostList";
import Header from "./components/Header";
import { Login } from "./pages/index";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header></Header>
        <Route path="/" exact component={PostList} />
        <Route path="/login" component={Login} />
      </ConnectedRouter>
    </>
  );
}

export default App;
