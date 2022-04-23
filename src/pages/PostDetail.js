import React from "react";
import Post from "../components/Post";
// import CommentList from "../components/CommentList";
// import CommentWrite from "../components/CommentWrite";

import Permit from "../main/Permit";

import { useSelector } from "react-redux";

const PostDetail = (props) => {
  const id = props.match.params.id;
  console.log("postdetail props", id);
  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((state) => state.post.list);
  const post_idx = post_list.findIndex((p) => p.postId === parseInt(id));
  const post = post_list[post_idx];

  return (
    <React.Fragment>
      <Post
        key={post.postId}
        {...post}
        is_me={post.nickname === user_info.user_nick}
      />
      {/* <Permit>
        <CommentWrite post_id={id} />
      </Permit>
      <CommentList post_id={id} /> */}
    </React.Fragment>
  );
};

export default PostDetail;
