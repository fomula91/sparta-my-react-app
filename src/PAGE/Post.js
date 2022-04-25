import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Post = (props) => {
  const { src } = props;

  const [priview, setPriview] = useState(null);

  const fileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPriview(reader.result);
    };
  };
  return (
    <>
      <DIV>
        <HEADER>
          <HEADER>header</HEADER>
          <HEADER>
            <BTN>로그인</BTN>
            <BTN>회원가입</BTN>
            <BTN>로그아웃</BTN>
            <BTN>내정보</BTN>
            <BTN>알림</BTN>
          </HEADER>
        </HEADER>
        <HEADTEXT>게시물 작성</HEADTEXT>
        <FILEDIV>
          <input type="file" onChange={fileSelect}></input>
        </FILEDIV>
        <DIV>
          <IMGOUT>
            <IMGIN src={priview ? priview : src}>nice meet you</IMGIN>
          </IMGOUT>
        </DIV>
        <DIV>
          <TEXTAREA placeholder="여기에 쓰시오"></TEXTAREA>
        </DIV>
        <UPLOADBTN>업로드</UPLOADBTN>
      </DIV>
    </>
  );
};

Post.defaultProps = {
  src: "https://via.placeholder.com/500x400",
};

const DIV = styled.div`
  border: 2px solid black;
  height: 100%;
  margin: 5px;
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

const HEADER = styled.div`
  display: flex;
  //flex-wrap으로 해당 컴포넌트 밖으로 삐져나가지 않게 설정
  flex-wrap: wrap;
  border: 2px solid yellowgreen;
  //justify-content로 엘리먼트간 간격을 벌림
  justify-content: space-between;
  align-items: center;
`;

const BTN = styled.div`
  border: 2px solid red;
  width: 100px;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
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

export default Post;
