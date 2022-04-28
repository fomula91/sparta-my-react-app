//toolkit을 사용하지 않고 리덕스의 문법을 간소화 시켜주는 모듈
import { createAction, handleActions } from "redux-actions";
//redux의 데이터를 immutable하게 유지시켜주는 모듈
import { produce } from "immer";
import axios from "axios";

import { getCookie, setCookie } from "../../Cookie";

//상태 초기화
const initialState = {
  user: null,
  is_login: false,
};
// API 통신 주소
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
//액션 정의
const SET_USER = "SETUSER";

//액션 생성자
const setUser = createAction(SET_USER, (user) => ({ user }));

//미들웨어
// const signupUserCheck = (id) => {
//   return function (dispatch, getState, { history }) {
//     console.log("hello checkID");
//     console.log(id);
//     console.log(BASE_URL);
//     axios
//       .get(`${BASE_URL}/user/register/${id}`)
//       .then((res) => {
//         window.alert(`${res.data.msg}`);
//       })
//       .catch((err) => console.log(err.response));
//   };
// };

const userCheck = () => {
  return function (dispatch, getState, { history }) {
    console.log("hello userCheck");
    const mytoken = getCookie();

    axios({
      method: "get",
      url: `${BASE_URL}users/auth`,
      headers: {
        Authorization: `Bearer ${mytoken}`,
      },
    })
      .then((res) => {
        const user = res.data.user;

        dispatch(setUser(user));
      })
      .catch((err) => console.log(err.response));
  };
};
const signupUserAxios = (user) => {
  return function (dispatch, getState, { history }) {
    console.log("hello signupUser");

    axios({
      method: "post",
      url: `${BASE_URL}users/signup`,
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json,",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        email: user.id,
        nickname: user.nick,
        password: user.pass,
      },
    })
      .then((res) => {
        window.alert("회원가입 성공!");
        history.replace("/login");
      })
      .catch((err) => {
        window.alert(err.response.data.message);
        console.log(err.response);
      });
  };
};
const loginUserAxios = (id, pass) => {
  return function (dispatch, getState, { history }) {
    console.log("hello getUserAxios");
    axios({
      method: "post",
      url: `${BASE_URL}users/signin`,
      data: {
        password: pass,
        email: id,
      },
    })
      .then((res) => {
        history.replace("/");
        window.alert("로그인 성공!");
        setCookie(res.data.token);
        dispatch(userCheck());
      })
      .catch((err) => {
        window.alert(err.response.data.message);
        console.log(err.response);
      });
  };
};

//리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log("hello reducer SETUSER");

        draft.user = action.payload.user;
      }),
  },
  initialState
);

const actionCreators = {
  loginUserAxios,
  signupUserAxios,
  userCheck,
};

// 액션 생성자 export
export { actionCreators };
