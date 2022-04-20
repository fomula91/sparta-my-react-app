import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";

import { setCookie, getCookie, deleteCookie } from "../../main/Cookie";

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

// middleware actions
const loginAxios = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    console.log("hello loginAxios");
    console.log(id, pwd);
    axios({
      method: "post",
      url: "https://e28bcc4e-a83a-4009-8ade-8e539c86f78a.mock.pstmn.io/api/login",
      data: {
        id: id,
        pwd: pwd,
      },
    }).then((res) => {
      console.log("res is ", res);
      const user_info = {
        id: res.data.id,
        uid: res.data.uid,
        user_name: res.data.user_name,
        profile_src: res.data.user_profile_src,
      };
      dispatch(setUser(user_info));
    });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.user);
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // deleteCookie("is_login");
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
};

export { actionCreators };
