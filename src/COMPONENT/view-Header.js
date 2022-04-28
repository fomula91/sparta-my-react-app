import React, { useEffect } from "react";
import styled from "styled-components";
import { getCookie } from "../Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Header = () => {
  const dispatch = useDispatch();
  const is_login = getCookie();
  useEffect(() => {
    console.log("hello Header useEffect");
    if (is_login === null) {
      return;
    }
    dispatch(userAction.userCheck());
  }, []);

  const logout = () => {
    sessionStorage.removeItem("mytoken");
    window.location.reload();
  };

  if (is_login) {
    return (
      <>
        <HEADER>
          <HEADER>header</HEADER>
          <HEADER>
            <BTN
              onClick={() => {
                window.alert("미구현!");
              }}
            >
              내정보
            </BTN>
            <BTN
              onClick={() => {
                window.alert("미구현!");
              }}
            >
              알림
            </BTN>
            <BTN onClick={logout}>로그아웃</BTN>
          </HEADER>
        </HEADER>
      </>
    );
  } else {
    return (
      <>
        <HEADER>
          <HEADER>header</HEADER>
          <HEADER>
            <BTN
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </BTN>
            <BTN
              onClick={() => {
                history.push("/signup");
              }}
            >
              회원가입
            </BTN>
          </HEADER>
        </HEADER>
      </>
    );
  }
};

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

  :hover {
    background: skyblue;
  }
`;

export default Header;
