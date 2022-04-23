// PostList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { getCookie } from "../main/Cookie";

import Post from "../components/Post";
import { Grid } from "../elements";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_redux = useSelector((state) => state.user.user);
  const user_Boolen = () => {
    const is_user = getCookie("is_user");
    if (is_user === undefined) {
      return false;
    } else {
      const is_login = user_redux.user_id === JSON.parse(is_user).user_id;
      if (is_login) {
        return true;
      } else {
        return false;
      }
    }
  };

  const { history } = props;

  React.useEffect(() => {
    dispatch(postActions.getPostAxios());
  }, []);

  return (
    <Grid bg={"#EFF6FF"} padding="20px 0px">
      {post_list.map((value, index) => {
        console.log(value.nickname);
        if (user_Boolen() && user_redux.user_nick === value.nickname) {
          return (
            <Grid
              key={value.postId}
              bg="#ffffff"
              _onClick={() => {
                history.push(`/post/${value.postId}`);
              }}
            >
              <Post is_me key={value.postId} {...value} />
            </Grid>
          );
        } else {
          return (
            <Grid
              key={value.postId}
              bg="#ffffff"
              _onClick={() => {
                history.push(`/post/${value.postId}`);
              }}
            >
              <Post key={value.postId} {...value} />
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default PostList;
