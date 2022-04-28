//toolkit을 사용하지 않고 리덕스의 문법을 간소화 시켜주는 모듈
import { createAction, handleActions } from "redux-actions";
//redux의 데이터를 immutable하게 유지시켜주는 모듈
import { produce } from "immer";

import { getCookie } from "../../Cookie";

import axios from "axios";

//상태 초기화
const initialState = {
  mylist: [],
};

// API 통신 주소
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

//액션 정의

const SETPOST = "SETPOST";

// 액션 생성자

const setPost = createAction(SETPOST, (list) => ({ list }));

// 미들웨어

const getPostAxios = () => {
  return function (dispatch, getState, { history }) {
    console.log("hello getpostAxios");

    axios
      .get(`${BASE_URL}posts`)
      .then((res) => {
        const list = res.data.rows;
        dispatch(setPost(list));
      })
      .catch((err) => console.log(err.response));
  };
};

const getPostOneAxios = () => {
  return function (dispatch, getState, { history }) {
    console.log(getState().post.mylist);
  };
};

const setPostAxios = (imageFile, content) => {
  return function (dispatch, getState, { history }) {
    console.log("hello setPostAxios");
    const mytoken = getCookie();
    console.log(imageFile.image);
    const formdata = new FormData();
    console.log(Object.keys(imageFile));
    Object.keys(imageFile).forEach((key) => {
      console.log(key);
      formdata.append(key, imageFile[key]);
    });
    console.log(formdata);
    // axios({
    //   method: "post",
    //   url: `${BASE_URL}posts`,
    //   headers: {
    //     Authorization: `Bearer ${mytoken}`,
    //     "content-type": "multipart/form-data",
    //   },
    //   data: {
    //     content: content,
    //     image: imageFile.image,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err.response));
  };
};
const setPostLike = (postid) => {
  return function (dispatch, getState, { history }) {
    console.log("hello setLike");
    const mytoken = getCookie();

    axios({
      method: "put",
      url: `${BASE_URL}posts/${postid}/like`,
      headers: {
        Authorization: `Bearer ${mytoken}`,
      },
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err.response));
  };
};
// 리듀서

export default handleActions(
  {
    [SETPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.mylist = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  getPostAxios,
  getPostOneAxios,
  setPostAxios,
  setPostLike,
};
// 액션 생성자
export { actionCreators };
