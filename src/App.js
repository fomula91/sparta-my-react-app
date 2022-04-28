import React, { useEffect, useState } from "react";
import styled from "styled-components";

import PostDetail from "./PAGE/PostDetail";
import PostList from "./PAGE/view-PostList";
import Login from "./PAGE/Login";
import Signup from "./PAGE/Signup";
import WritePost from "./PAGE/PostWrite";
import { Vheader } from "./COMPONENT/index";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import { getCookie } from "./Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "./redux/modules/user";

function App() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const is_user = useSelector((state) => state.user.user);

  useEffect(() => {
    const Cookie = getCookie();
    if (is_user) {
      if (Cookie) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    } else {
      if (Cookie) {
        dispatch(userAction.userCheck());
      } else {
        setLogin(false);
      }
    }
  });
  return (
    <>
      <Vheader />
      {login ? (
        <BTN
          onClick={() => {
            history.push("/post");
          }}
        >
          +
        </BTN>
      ) : null}

      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/post" component={WritePost}></Route>
        <Route path="/detail/:id" exact component={PostDetail}></Route>
      </ConnectedRouter>
    </>
  );
}

const BTN = styled.button`
  position: fixed;
  color: white;
  font-size: 40px;
  font-weight: bold;
  top: 80%;
  left: 80%;
  outline: none;
  border: none;
  background: powderblue;
  padding: 15px;
  border-radius: 100%;

  :hover {
    background: red;
  }
`;
export default App;
