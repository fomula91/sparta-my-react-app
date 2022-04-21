// PostList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import Post from "../components/Post";
import { Grid } from "../elements";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  const { history } = props;

  React.useEffect(() => {
    dispatch(postActions.getPostAxios());
  }, []);

  return (
    <Grid bg={"#EFF6FF"} padding="20px 0px">
      {post_list.map((value, index) => {
        return (
          <Grid
            key={value.postid}
            bg="#ffffff"
            _onClick={() => {
              // history.push(`/post/${value.postid}`);
            }}
          >
            <Post {...value} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PostList;
