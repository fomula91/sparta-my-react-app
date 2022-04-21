import React from "react";

import { Button } from "../elements";
import { storage } from "./Storage";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const dispatch = useDispatch();
  //   const is_uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();

  const selectFile = (e) => {
    // console.log(e);
    // console.log(e.target);

    // console.log(e.target.files[0]);
    // console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    //선택한 파일을 url로 만드는 방법 base64로 인코딩한다
    reader.readAsDataURL(file);

    //onloaded 읽기가 완료됬을때 실행되는 이벤트 핸들러
    reader.onloadend = () => {
      //console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
  };

  return (
    <React.Fragment>
      <input
        type="file"
        onChange={selectFile}
        ref={fileInput}
        // disabled={is_uploading}
      />
      <Button _onClick={uploadFB}>업로드하기</Button>
    </React.Fragment>
  );
};

export default Upload;
