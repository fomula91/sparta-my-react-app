import React, { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();
  const id = useRef("");
  const pass = useRef("");

  const login = () => {
    if (id.current.value === "" || pass.current.value === "") {
      window.alert("아이디, 비밀번호 입력해주세요!");
      return;
    }
    dispatch(userAction.loginUserAxios(id.current.value, pass.current.value));
  };
  return (
    <>
      <DIV>
        <DIV>
          hello world
          <DIV>
            <TEXTDIV>아이디</TEXTDIV>
            <INPUT ref={id} placeholder="id"></INPUT>
          </DIV>
          <DIV>
            <TEXTDIV>비밀번호</TEXTDIV>
            <INPUT ref={pass} type="password" placeholder="password"></INPUT>
          </DIV>
          <DIV>
            <LOGINBTN onClick={login}>로그인하기</LOGINBTN>
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

export default Login;
