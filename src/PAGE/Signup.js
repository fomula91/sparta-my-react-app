import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { actionCreators as userAction } from "../redux/modules/user";

const Signup = () => {
  const dispatch = useDispatch();
  const id = useRef("");
  const nickname = useRef("");
  const pass = useRef("");
  const pass_repeat = useRef("");

  const signup = () => {
    console.log("SignUP!!");
    const user = {
      id: id.current.value,
      nick: nickname.current.value,
      pass: pass.current.value,
      passCheck: pass_repeat.current.value,
    };
    if (user.pass !== user.passCheck) {
      console.log(user.pass, user.passCheck);
      window.alert("비밀번호가 서로 다릅니다!");
      return;
    }
    dispatch(userAction.signupUserAxios(user));
  };

  // const checkID = () => {
  //   console.log("checkid");
  //   dispatch(userAction.signupUserCheck(id.current.value));
  // };
  return (
    <>
      <DIV>
        <DIV>
          hello world
          <DIV>
            <TEXTDIV>아이디</TEXTDIV>
            <INPUT ref={id} placeholder="id"></INPUT>
            {/* <BTN onClick={checkID}>아이디 중복</BTN> */}
          </DIV>
          <DIV>
            <TEXTDIV>닉네임</TEXTDIV>
            <INPUT ref={nickname} placeholder="nickname"></INPUT>
          </DIV>
          <DIV>
            <TEXTDIV>비밀번호</TEXTDIV>
            <INPUT type="password" ref={pass} placeholder="password"></INPUT>
          </DIV>
          <DIV>
            <TEXTDIV>비밀번호 확인</TEXTDIV>
            <INPUT
              type="password"
              ref={pass_repeat}
              placeholder="password repeat"
            ></INPUT>
          </DIV>
          <DIV>
            <LOGINBTN onClick={signup}>회원가입하기</LOGINBTN>
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
  outline: none;
  border: none;
  background: green;
  color: white;
  text-align: center;
  :hover {
    background: black;
    color: white;
  }
`;
const INPUT = styled.input`
  width: 100%;
  border: 2px solid skyblue;
  padding: 15px;
  margin: 0 0 5px 0;

  box-sizing: border-box;
`;

export default Signup;
