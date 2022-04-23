import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";

import { actionCreators as imageActions } from "./image";

import axios from "axios";
import { setCookie, getCookie, delCookie } from "../../main/Cookie";

import { storage } from "../../main/Storage";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";

const BASE_API = process.env.REACT_APP_API_BASE_URL;

//action
const setPost = createAction(SET_POST, (post_list) => ({
  post_list,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

//init
const initialState = {
  list: [],
};

const initialPost = {
  contents: "",
  // createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
  imagePath:
    "https://opgg-com-image.akamaized.net/attach/images/20190413131212.806445.jpeg",
  // likeCount: 0,
  // liked: false,
  // nickname: "",
  layout: "top",
};

//middleware
const addPostAxios = (contents = "") => {
  return function (dispatch, getState, { history }) {
    // const postDB = firestore.collection("post");
    // console.log(contents);
    const _user = getState().user.user;
    console.log(_user);
    const user_info = {
      user_id: _user.user_id,
      user_nick: _user.user_nick,
    };

    //기본으로 작성된 포스트의 내용을 가지고와서 해당 부분을 고쳐쓴다.
    const _post = {
      ...initialPost,
      contents: contents,
      // insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const _image = getState().image.preview;
    // console.log("_image is ", _image);
    // console.log("typeof iamge is ", typeof _image);

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    // console.log(_upload);
    const mycookie = getCookie("is_login");
    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          axios({
            method: "post",
            url: `${BASE_API}api/post`,
            headers: {
              authorization: mycookie,
            },
            data: {
              contents: _post.contents,
              layout: _post.layout,
              imagePath: url,
            },
          })
            .then((res) => {
              console.log("axios res is ", res.data);
              // let myPost = { ...user_info, ..._post, image_url: url };
              // dispatch(addPost(myPost));
              history.replace("/");
              dispatch(imageActions.setPreview(null));
            })
            .catch((err) => console.log(err.response));
        })
        // .then((url) => {
        //   // console.log("url222 is ", url);
        //   // postDB
        //   //   .add({ ...user_info, ..._post, image_url: url })
        //   //   .then((doc) => {
        //   //     let post = { user_info, ..._post, id: doc.id, image_url: url };
        //   //     dispatch(addPost(post));
        //   //     history.replace("/");
        //   //     dispatch(imageActions.setPreview(null));
        //   //   })
        //   //   .catch((err) => {
        //   //     window.alert("포스트 작성 실패!");
        //   //     console.log("post 작성 실패 !", err);
        //   //   });
        // })
        .catch((err) => {
          console.log(err.response);
          window.alert("이미지 업로드 실패!");
          console.log("이미지 업로드 실패!!", err);
        });
    });
  };
};

const getPostAxios = () => {
  return function (dispatch, getState, { history }) {
    console.log("hello getPostAxios");
    axios
      .get(`${BASE_API}api/post`)
      .then((res) => {
        const _post = [...res.data];

        dispatch(setPost(_post));
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };
};

const getPostOneAxios = (postId) => {
  return function (dispatch, getState, { history }) {
    const mycookie = getCookie("is_login");
    axios
      .get(`${BASE_API}api/post/${postId}`)
      .then((res) => {
        console.log("getpost ONE axios is ", res.data);
        const _post = { ...res.data };
        dispatch(setPost(_post));
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err.code, err.message);
      });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        //unshift -> 배열의 앞부분에 immer형태로 추가한다.
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);

        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  editPost,
  getPostAxios,
  addPostAxios,
  getPostOneAxios,
};

export { actionCreators };
