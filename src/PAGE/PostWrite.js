import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { storage } from "../storage";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { useDispatch } from "react-redux";
import { actionCreators as postAciton } from "../redux/modules/post";

const Post = (props) => {
  const { src } = props;
  const dispatch = useDispatch();
  const [priview, setPriview] = useState(null);
  const [layout, setLayout] = useState("right");
  const [imageurl, setImageurl] = useState(null);
  const [post, setPost] = useState({
    image: null,
  });
  const contents = useRef("");
  const myfile = useRef(null);

  const fileSelect = (e) => {
    const {
      target: { files },
    } = e;
    const image = files[0];

    setPost({ ...post, image: image ? image : null });
    const reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setPriview(reader.result);
      setImageurl(reader.result);

      // const _uploadRef = ref(storage, `image/${file.name}`);

      // uploadString(_uploadRef, reader.result, "data_url").then((res) => {
      //   getDownloadURL(_uploadRef).then((url) => setImageurl(url));
      // });
    };
  };

  const upload = () => {
    if (myfile.current.files[0] === undefined) {
      window.alert("이미지를 업로드해주세요!");
      return;
    } else if (contents.current.value === "") {
      window.alert("본문을 작성해주세요!");
      return;
    }

    dispatch(postAciton.setPostAxios(post, contents.current.value));
  };
  if (layout === "top") {
    return (
      <>
        <DIV>
          <HEADTEXT>게시물 작성</HEADTEXT>
          <FILEDIV>
            <input ref={myfile} type="file" onChange={fileSelect}></input>
          </FILEDIV>
          <LAYOUTDIV>
            <BTN
              onClick={() => {
                setLayout("left");
              }}
            >
              레이아웃 왼쪽
            </BTN>
            <BTN
              onClick={() => {
                setLayout("top");
              }}
            >
              레이아웃 가운데
            </BTN>
            <BTN
              onClick={() => {
                setLayout("right");
              }}
            >
              레이아웃 오른쪽
            </BTN>
          </LAYOUTDIV>
          <DIV>
            <IMGOUT>
              <IMGIN src={priview ? priview : src}>nice meet you</IMGIN>
            </IMGOUT>
          </DIV>
          <DIV>
            <TEXTAREA ref={contents} placeholder="여기에 쓰시오"></TEXTAREA>
          </DIV>
          <UPLOADBTN onClick={upload}>업로드</UPLOADBTN>
        </DIV>
      </>
    );
  } else if (layout === "left") {
    return (
      <>
        <DIV>
          <HEADTEXT>게시물 작성</HEADTEXT>
          <FILEDIV>
            <input ref={myfile} type="file" onChange={fileSelect}></input>
          </FILEDIV>
          <LAYOUTDIV>
            <BTN
              onClick={() => {
                setLayout("left");
              }}
            >
              레이아웃 왼쪽
            </BTN>
            <BTN
              onClick={() => {
                setLayout("top");
              }}
            >
              레이아웃 가운데
            </BTN>
            <BTN
              onClick={() => {
                setLayout("right");
              }}
            >
              레이아웃 오른쪽
            </BTN>
          </LAYOUTDIV>
          <LEFTDIV>
            <LEFTIMGOUT>
              <LEFTIMIN src={priview ? priview : src}>nice meet you</LEFTIMIN>
            </LEFTIMGOUT>
            <DIV style={{ height: "50vh", width: "50vw" }}>
              <TEXTAREA
                style={{ height: "100%" }}
                ref={contents}
                placeholder="여기에 쓰시오"
              ></TEXTAREA>
            </DIV>
          </LEFTDIV>

          <UPLOADBTN onClick={upload}>업로드</UPLOADBTN>
        </DIV>
      </>
    );
  } else if (layout === "right") {
    return (
      <>
        <DIV>
          <HEADTEXT>게시물 작성</HEADTEXT>
          <FILEDIV>
            <input ref={myfile} type="file" onChange={fileSelect}></input>
          </FILEDIV>
          <LAYOUTDIV>
            <BTN
              onClick={() => {
                setLayout("left");
              }}
            >
              레이아웃 왼쪽
            </BTN>
            <BTN
              onClick={() => {
                setLayout("top");
              }}
            >
              레이아웃 가운데
            </BTN>
            <BTN
              onClick={() => {
                setLayout("right");
              }}
            >
              레이아웃 오른쪽
            </BTN>
          </LAYOUTDIV>
          <LEFTDIV>
            <DIV style={{ height: "50vh", width: "50vw" }}>
              <TEXTAREA
                style={{ height: "100%" }}
                ref={contents}
                placeholder="여기에 쓰시오"
              ></TEXTAREA>
            </DIV>
            <LEFTIMGOUT>
              <LEFTIMIN src={priview ? priview : src}>nice meet you</LEFTIMIN>
            </LEFTIMGOUT>
          </LEFTDIV>

          <UPLOADBTN onClick={upload}>업로드</UPLOADBTN>
        </DIV>
      </>
    );
  }
};

Post.defaultProps = {
  src: "https://via.placeholder.com/500x400",
};

const DIV = styled.div`
  border: 2px solid black;
  height: 100%;
  margin: 5px;
`;

const LEFTDIV = styled(DIV)`
  display: flex;
`;

const LAYOUTDIV = styled(DIV)`
  display: flex;
  justify-content: center;
`;

const HEADTEXT = styled(DIV)`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;

const FILEDIV = styled(DIV)`
  display: flex;
`;

const TEXTAREA = styled.textarea`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
`;

const BTN = styled.div`
  border: 2px solid red;
  width: 100px;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;

  :hover {
    background: skyblue;
  }
`;

const UPLOADBTN = styled(BTN)`
  width: 100%;
  margin: 0;
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
const LEFTIMGOUT = styled(IMGOUT)`
  width: 70%;
  border: 2px solid red;
  height: 50%;
`;
const LEFTIMIN = styled(IMGIN)`
  width: 100%;
  padding-top: 75%;
`;
export default Post;
