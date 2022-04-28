import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postAciton } from "../redux/modules/post";

const PostDetail = (props) => {
  const id = props.match.params.id;
  console.log("params is ", id);
  const url = process.env.REACT_APP_API_BASE_IMAGE;

  const dispatch = useDispatch();
  const list = useSelector((state) => state.post.mylist);
  const index = list.findIndex(
    (value, index) => value.post_id === parseInt(id)
  );
  const getPost = list[index];

  useEffect(() => {
    dispatch(postAciton.getPostAxios());
  }, []);
  return (
    <>
      <BGDIV>
        <DIV>
          <USERTABLE>
            <USERTABLE>
              <IMG>{getPost.user.nickname[0]}</IMG>
              <DIV>{getPost.user.nickname}</DIV>
            </USERTABLE>

            <USERTABLE>
              <DIV>{getPost.createdAt}</DIV>
              <BTN>btn</BTN>
            </USERTABLE>
          </USERTABLE>
        </DIV>
        <TEXTAREA>{getPost.content}</TEXTAREA>
        <DIV
        // onClick={history.push("/postdetail")}
        >
          <IMGOUT>
            <IMGIN src={`${url}${getPost.image_url}`}>nice meet you</IMGIN>
          </IMGOUT>
        </DIV>

        <DIV>
          <LIKED>
            <DIV>LIKE is {getPost.likes.length}</DIV>
            {getPost.likes ? <BTN>like</BTN> : ""}
          </LIKED>
        </DIV>
      </BGDIV>
    </>
  );
};
const DIV = styled.div`
  border: 2px solid black;
  height: 100%;
  margin: 5px;
`;
const BGDIV = styled(DIV)`
  background: skyblue;
`;
const TEXTAREA = styled(DIV)`
  text-align: left;
`;

const BTN = styled.div`
  border: 2px solid red;
  width: 100px;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
`;
const IMGOUT = styled.div`
  width: 100%;
`;
const IMGIN = styled.div`
  /* position: relative; */
  width: 100%;
  padding-top: 75%;

  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const IMG = styled.div`
  width: 40px;
  height: 40px;

  border: 2px solid blanchedalmond;
  border-radius: 40px;

  background-image: url("https://firebasestorage.googleapis.com/v0/b/mycommunity-a2861.appspot.com/o/images%2FMGpAPQMOQ6VjT0D6sI8LfXQCmtf2_1650543022204?alt=media&token=7a9cda72-58da-4c01-9752-4bb358379d5d");
  background-size: cover;
`;

const USERTABLE = styled.div`
  display: flex;
  flex-wrap: wrap;

  border: 2px solid blueviolet;
  align-items: center;
  padding: 0px 10px;
  justify-content: space-between;
`;

const LIKED = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
`;
export default PostDetail;
