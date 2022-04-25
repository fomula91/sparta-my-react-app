import React from "react";
import styled from "styled-components";

const Login = () => {
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
        <DIV>
          hello world
          <DIV>
            <TEXTDIV>아이디</TEXTDIV>
            <INPUT placeholder="id"></INPUT>
          </DIV>
          <DIV>
            <TEXTDIV>비밀번호</TEXTDIV>
            <INPUT placeholder="password"></INPUT>
          </DIV>
          <DIV>
            <LOGINBTN>로그인하기</LOGINBTN>
          </DIV>
        </DIV>
      </DIV>
    </>
  );
};

const DIV = styled.div`
  border: 2px solid black;
  height: 100%;
  margin: 5px;
`;
const TEXTDIV = styled(DIV)`
  text-align: left;
  margin: 0px;
  border: none;
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
const LOGINBTN = styled(BTN)`
  width: 100%;
  margin: 0;
`;
const INPUT = styled.input`
  width: 100%;
  border: 2px solid skyblue;
  padding: 15px;
  margin: 0 0 5px 0;

  box-sizing: border-box;
`;

export default Login;
