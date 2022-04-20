import React from "react";
import { Grid, Text, Button } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";

//history 작동안함
// import { history } from "../redux/configureStore";

const Header = (props) => {
  const dispatch = useDispatch();
  //useHistory 사용해서 해결
  const myHistory = useHistory();

  const is_login = useSelector((state) => state.user.is_login);

  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              hello world
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="내정보"></Button>

            <Button
              text="알림"
              _onClick={() => {
                // history.push("/noti");
              }}
            />
            <Button text="로그아웃" _onClick={() => {}}></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            헬로
          </Text>
        </Grid>

        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              myHistory.push("/login");
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              myHistory.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
