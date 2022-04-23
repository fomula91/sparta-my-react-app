import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";

import { setCookie, getCookie, delCookie } from "../../main/Cookie";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};
const BASE_API = process.env.REACT_APP_API_BASE_URL;

// middleware actions
const signupAxios = (id, pwd, pwd_check, user_name) => {
  return function (dispatch, getState, { history }) {
    console.log("hello signupAxios!!!");

    axios({
      method: "post",
      url: `${BASE_API}api/user/register`,
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json,",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        password: pwd,
        passwordCheck: pwd_check,
        nickname: user_name,
        username: id,
      },
    })
      .then((res) => {
        console.log(res);
        window.alert("회원가입 성공!");
        history.replace("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
const loginAxios = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    console.log("hello loginAxios");

    axios({
      method: "post",
      url: `${BASE_API}api/user/login`,
      data: {
        username: id,
        password: pwd,
      },
    })
      .then((res) => {
        console.log("my res -> ", res);
        const mytoken = res.headers.authorization;
        setCookie("is_login", mytoken);
        axios({
          method: "GET",
          url: `${BASE_API}api/user/info`,
          headers: { authorization: mytoken },
          params: {
            username: id,
          },
        })
          .then((res) => {
            const user_info = {
              user_id: res.data.username,
              user_nick: res.data.nickname,
            };
            const user = JSON.stringify(user_info);
            setCookie("is_user", user);
            dispatch(setUser(user_info));
            history.push("/");
          })
          .catch((error) => {
            //401,403
            console.log(error.response);
            console.log(error.code, error.message);
          });
      })
      .catch((error) => {
        //401,403
        console.log(error.code, error.message);
      });
  };
};
const loginCheckAxios = () => {
  return function (dispatch, getState, { history }) {
    console.log("hello loginCheckAxios");
    const mycookie = getCookie("is_user");

    if (mycookie === undefined) {
      console.log("cookie null!!!!");
      history.replace("/");
    } else {
      console.log("cookie is not null!!!!");
      const user = JSON.parse(mycookie);
      console.log(user);
      const user_info = {
        user_id: user.user_id,
        user_nick: user.user_nick,
      };
      dispatch(setUser(user_info));
    }
  };
};
const logoutAxios = () => {
  return function (dispatch, getState, { history }) {
    console.log("hello logoutAxios");
    const user_info = getState().user.user;
    console.log(user_info);
    dispatch(logOut(user_info));
    history.replace("/login");
  };
};
// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        delCookie("is_login");
        delCookie("is_user");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  loginAxios,
  loginCheckAxios,
  logoutAxios,
  signupAxios,
};

export { actionCreators };
