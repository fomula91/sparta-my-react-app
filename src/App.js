import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

import Header from "./components/Header";
import Permit from "./main/Permit";
import {
  Login,
  PostWrite,
  PostList,
  Notification,
  PostDetail,
  Signup,
} from "./pages/index";
import { Button } from "./elements/index";
function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header></Header>
        <Route path="/" exact component={PostList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/write" component={PostWrite} />
        <Route path="/notificate" component={Notification} />
        <Route path="/post/:id" component={PostDetail} />
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
