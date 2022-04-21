import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import PostList from "./pages/PostList";
import Header from "./components/Header";
import { Login, PostWrite } from "./pages/index";
import Permit from "./main/Permit";
import { Button } from "./elements/index";
function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header></Header>
        <Route path="/" exact component={PostList} />
        <Route path="/login" component={Login} />
        <Route path="/write" component={PostWrite} />
        <Permit>
          <Button
            is_float
            text="+"
            _onClick={() => {
              history.push("/write");
            }}
          ></Button>
        </Permit>
      </ConnectedRouter>
    </>
  );
}

export default App;
