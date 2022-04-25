import React from "react";
import styled from "styled-components";

const PostList = () => {
  return (
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
        <DIV>
          <USERTABLE>
            <USERTABLE>
              <IMG>image</IMG>
              <DIV>MYNAME</DIV>
            </USERTABLE>

            <USERTABLE>
              <DIV>time</DIV>
              <BTN>btn</BTN>
            </USERTABLE>
          </USERTABLE>
        </DIV>
        <DIV>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit fugit
          excepturi alias corrupti odio non tempore minima? Accusantium atque
          blanditiis, sapiente provident ipsa eveniet voluptates quod? Totam id
          inventore dolorum. Repellat, at cum nostrum labore adipisci deleniti,
          ut rem vitae dolore aut, accusantium asperiores cupiditate atque eius
          provident! Amet molestiae veniam labore assumenda voluptate beatae
          aliquam sit eaque veritatis error? Accusamus perspiciatis inventore
          rem dolorum, aspernatur culpa voluptatem sunt ducimus eligendi natus.
          Unde labore totam ea, reprehenderit minima inventore repudiandae rem
          reiciendis quia possimus facere, expedita tempora ad eveniet. Eum.
          Magni modi molestias corrupti doloremque provident numquam ipsa
          repellendus sequi ex, velit quibusdam sapiente eaque libero eos illum
          nihil suscipit voluptatibus odit pariatur cupiditate. Repellendus
          quisquam adipisci dolorem hic sit. Enim voluptatum culpa consectetur
          harum nobis nulla assumenda aliquam tenetur perferendis, sapiente
          veritatis neque suscipit? Ab quos eligendi, iste laudantium
          accusantium veniam quia ullam cupiditate illo dolores autem fugit ea.
          Mollitia quidem ratione magni tempore? Tempora ab cumque quasi quos
          nesciunt alias! Fugit, dolorum sed maxime ab dolores eaque mollitia
          delectus. Dicta aliquam voluptatem minima porro, itaque sunt odio vel.
          Delectus itaque aut architecto ratione debitis mollitia dicta qui
          saepe deleniti vero ullam nesciunt, repudiandae voluptatum laborum
          iure atque laudantium blanditiis fuga dolore nemo tenetur ipsum
          nostrum ea. Quibusdam, dolore. Eum commodi et, quasi dolore rerum enim
          ipsum ipsa totam at quae laboriosam consectetur sed deserunt aut
          reiciendis provident deleniti perferendis. Reprehenderit excepturi
          ratione sunt, magnam eius ipsa totam et? Perferendis officia ad dolor.
          Veritatis vitae provident ratione quam ad aspernatur quas at officia
          id, iusto impedit tempore, beatae quod accusantium quaerat eveniet
          enim animi suscipit, ipsa nulla. Itaque, explicabo. Odio aut
          recusandae illum iure sint repudiandae in rem ut beatae velit eius,
          perspiciatis deserunt vero dolor! Natus asperiores, eligendi aut vitae
          laudantium quisquam iste temporibus odio ut dolore architecto?
        </DIV>
        <DIV>
          <IMGOUT>
            <IMGIN>nice meet you</IMGIN>
          </IMGOUT>
        </DIV>

        <DIV>
          <LIKED>
            <DIV>LIKE is 10</DIV>
            <BTN>like</BTN>
          </LIKED>
        </DIV>
      </DIV>
    </DIV>
  );
};
const DIV = styled.div`
  border: 2px solid black;
  height: 100%;
  margin: 5px;
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
const IMGOUT = styled.div`
  width: 100%;
`;
const IMGIN = styled.div`
  /* position: relative; */
  width: 100%;
  padding-top: 75%;

  background-image: url("https://firebasestorage.googleapis.com/v0/b/mycommunity-a2861.appspot.com/o/images%2FMGpAPQMOQ6VjT0D6sI8LfXQCmtf2_1650543022204?alt=media&token=7a9cda72-58da-4c01-9752-4bb358379d5d");
  background-size: cover;
`;

const IMG = styled.div`
  width: 40px;
  height: 40px;

  border: 2px solid blanchedalmond;
  border-radius: 40px;

  background-image: url("https://firebasestorage.googleapis.com/v0/b/mycommunity-a2861.appspot.com/o/images%2FMGpAPQMOQ6VjT0D6sI8LfXQCmtf2_1650543022204?alt=media&token=7a9cda72-58da-4c01-9752-4bb358379d5d");
  background-size: cover;
`;

const USERTABLE = styled.div`
  display: flex;
  flex-wrap: wrap;

  border: 2px solid blueviolet;
  align-items: center;
  padding: 0px 10px;
  justify-content: space-between;
`;

const LIKED = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
`;

export default PostList;
