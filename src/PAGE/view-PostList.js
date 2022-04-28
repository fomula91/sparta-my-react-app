import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setCookie } from "../Cookie";

//컴포넌트

import { actionCreators as postAciton } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();

  const { history } = props;
  const url = process.env.REACT_APP_API_BASE_IMAGE;
  const user_info = useSelector((state) => state.user.user);
  const [uid, setUid] = useState(null);
  useEffect(() => {
    if (user_info) {
      setUid(user_info.user_id);
    } else {
    }
    dispatch(postAciton.getPostAxios());
  }, []);
  const list = useSelector((state) => state.post.mylist);
  const putlike = (postid) => {
    dispatch(postAciton.setPostLike(postid));
  };
  if (list.length > 0) {
    return (
      <DIV>
        {list.map((value, index) => {
          console.log(value);
          return (
            <React.Fragment key={value.post_id}>
              <BGDIV key={value.post_id}>
                <DIV>
                  <USERTABLE>
                    <USERTABLE>
                      <IMG>{value.user.nickname[0]}</IMG>
                      <DIV>{value.user.nickname}</DIV>
                    </USERTABLE>

                    <USERTABLE>
                      <DIV>{value.createdAt}</DIV>
                      {uid === !null ? (
                        uid === value.user.user_id ? (
                          <BTN>btn</BTN>
                        ) : null
                      ) : null}
                    </USERTABLE>
                  </USERTABLE>
                </DIV>
                <TEXTAREA>{value.content}</TEXTAREA>
                <DIV
                  onClick={() => {
                    history.push(`/detail/${value.post_id}`);
                  }}
                >
                  <IMGOUT>
                    <IMGIN src={`${url}${value.image_url}`}>
                      nice meet you
                    </IMGIN>
                  </IMGOUT>
                </DIV>

                <DIV>
                  <LIKED>
                    <DIV>LIKE is {value.likes.length}</DIV>
                    {value.likes ? (
                      <BTN
                        onClick={() => {
                          putlike(value.post_id);
                        }}
                      >
                        like
                      </BTN>
                    ) : (
                      ""
                    )}
                  </LIKED>
                </DIV>
              </BGDIV>
            </React.Fragment>
          );
        })}
      </DIV>
    );
  } else {
    return (
      <DIV>
        <DIV>
          <USERTABLE>
            <USERTABLE>
              <IMG>image</IMG>
              <DIV>MYNAME</DIV>
            </USERTABLE>

            <USERTABLE>
              <DIV>time</DIV>
              <BTN>btn</BTN>
            </USERTABLE>
          </USERTABLE>
        </DIV>
        <TEXTAREA>Lorem ipsum</TEXTAREA>
        <DIV>
          <IMGOUT>
            <IMGIN>nice meet you</IMGIN>
          </IMGOUT>
        </DIV>

        <DIV>
          <LIKED>
            <DIV>LIKE is 10</DIV>
            <BTN>like</BTN>
          </LIKED>
        </DIV>
      </DIV>
    );
  }
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
  text-align: center;
  width: 100px;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  :hover {
    color: white;
    background: purple;
  }
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

export default PostList;
