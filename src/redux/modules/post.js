import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import moment from "moment";

import { actionCreators as imageActions } from "./image";

import axios from "axios";
import { storage } from "../../main/Storage";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";

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
  user_info: {
    id: 0,
    user_name: "text_name",
    user_profile:
      "https://opgg-com-image.akamaized.net/attach/images/20190413131212.806445.jpeg",
  },
  image_url:
    "https://opgg-com-image.akamaized.net/attach/images/20190413131212.806445.jpeg",
  contents: "",
  comment_cnt: 0,
  likeCount: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

//middleware
const addPostAxios = (contents = "") => {
  return function (dispatch, getState, { history }) {
    // const postDB = firestore.collection("post");
    console.log(contents);
    const _user = getState().user.user;
    console.log(_user);
    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const _image = getState().image.preview;
    console.log("_image is ", _image);
    console.log("typeof iamge is ", typeof _image);

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");
    console.log(_upload);
    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          console.log("url is", url);
          return url;
        })
        .then((url) => {
          console.log("url222 is ", url);
          // postDB
          //   .add({ ...user_info, ..._post, image_url: url })
          //   .then((doc) => {
          //     let post = { user_info, ..._post, id: doc.id, image_url: url };
          //     dispatch(addPost(post));
          //     history.replace("/");
          //     dispatch(imageActions.setPreview(null));
          //   })
          //   .catch((err) => {
          //     window.alert("포스트 작성 실패!");
          //     console.log("post 작성 실패 !", err);
          //   });
        })
        .catch((err) => {
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
      .get(
        "https://e28bcc4e-a83a-4009-8ade-8e539c86f78a.mock.pstmn.io/api/post"
      )
      .then((res) => {
        const _post = [res.data[0]];
        console.log(res);
        dispatch(setPost(_post));
      })
      .catch((error) => {
        console.log(error.code, error.message);
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
};

export { actionCreators };
