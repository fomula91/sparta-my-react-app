import React from "react";
import { Grid, Image, Text, Button } from "../elements";

import { history } from "../redux/configureStore";

const Post = (props) => {
  console.log("post props", props);
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
            {props.is_me && (
              <Button
                width="auto"
                margin="10px"
                padding="10px"
                _onClick={() => {
                  history.push(`/write/${props.postId}`);
                }}
              >
                수정
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.imagePath} />
        </Grid>
        {/* <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  nickname: "test1234",
  imagePath:
    "https://opgg-com-image.akamaized.net/attach/images/20190413131212.806445.jpeg",
  contents: "고양이네요!",
  is_me: false,
  key: null,
};

export default Post;
