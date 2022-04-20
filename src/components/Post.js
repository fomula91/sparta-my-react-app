import React from "react";
import { Grid, Image, Text, Button } from "../elements";

import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.imagePath} />
            <Text bold>{props.nickname}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.createdAt}</Text>
            {/* {props.is_me && (
              <Button
                width="auto"
                margin="4px"
                padding="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )} */}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.imagePath} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.likeCount}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  // user_info: {
  //   user_name: "test1234",
  //   user_profile:
  //     "https://opgg-com-image.akamaized.net/attach/images/20190413131212.806445.jpeg",
  // },
  nickname: "test1234",
  // user_profile:
  //   "https://opgg-com-image.akamaized.net/attach/images/20190413131212.806445.jpeg",
  // imagePath:
  //   "https://opgg-com-image.akamaized.net/attach/images/20190413131212.806445.jpeg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  // is_me: false,
};

export default Post;
