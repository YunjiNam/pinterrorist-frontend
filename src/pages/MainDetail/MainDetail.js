import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import iconShare from "../../images/iconShare.png";
import profileMock from "../../images/profileMock.jpg";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown/Dropdown";
import CommentBox from "../../components/CommentBox/CommentBox";
import url from "../../config";

const MainDetail = () => {
  const [clickInput, setClickInput] = useState(false);
  const [clickCancel, setClickCancel] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentArr, setCommentArr] = useState([]);
  const [number, setNumber] = useState(0);
  const [image, setImage] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [firstBoard, setFirstBoard] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    console.log("Get 실행, id: ", id);
    fetch(`${url}/pin/${id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCommentArr(res.comment);
        setNumber(res.comment_total);
        setImage(res.pin.image_url);
        setText1(res.pin.text1);
        setText2(res.pin.text2);
        setFirstBoard(res.boards[0]["name"]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = () => {
    setClickInput(true);
  };

  const handleCancel = () => {
    setClickCancel(!clickCancel);
    setClickInput(false);
  };

  const handleDone = () => {
    if (commentText.length > 0) {
      console.log("Post 실행");

      const token = localStorage.getItem("Authorization");
      fetch(`${url}/pin/${id}/comment`, {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          comment: commentText,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setCommentArr(res.comment);
          setNumber(res.comment_total);
        });
      setClickInput(false);
      setCommentText("");
    }
  };
  //

  const handleChange = (e) => {
    setCommentText(e.target.value);
    setChangeColor(e.target.value.length > 0 ? true : false);
  };

  return (
    <MainDetailPage>
      <Link to="/">
        <Background></Background>
      </Link>
      <Header />
      <MainContainer>
        <MainWrap>
          <BackButtonWrap>
            <BackButtonIconWrap>
              <Link to="/">
                <BackButtonIcon></BackButtonIcon>
              </Link>
            </BackButtonIconWrap>
            <BackButtonTextWrap>
              <BackButtonText>추천</BackButtonText>
            </BackButtonTextWrap>
          </BackButtonWrap>
          <MainFeed>
            <FeedLeft>
              <img src={image} />
            </FeedLeft>
            <FeedRight>
              <RightNavContainer>
                <RightNavWrap>
                  <IconWrap>
                    <IconMoreWrap>
                      <IconMore>more_horiz</IconMore>
                    </IconMoreWrap>
                    <IconShareWrap>
                      <IconShare />
                    </IconShareWrap>
                  </IconWrap>
                  <Dropdown
                    image={image}
                    paramsId={id}
                    firstBoard={firstBoard}
                  />
                </RightNavWrap>
              </RightNavContainer>
              <RightTopContainer>
                <RightTopWrap>
                  <h1>
                    {text1 === "no text" || text1 === "'no text'"
                      ? null
                      : text1}
                  </h1>
                  <h3>{text2 === "no text" ? "" : text2}</h3>
                </RightTopWrap>
              </RightTopContainer>
              <RightBodyContainer>
                <div className="rightBodyWrap">
                  <CommentTopContainer>
                    <CommentTopText>댓글 {number}개</CommentTopText>
                  </CommentTopContainer>
                  {commentArr &&
                    commentArr.map((list, idx) => (
                      <CommentBox
                        user_name={list.user}
                        content={list.comment.content}
                        key={idx}
                        id={list.comment.id}
                        commentArr={commentArr}
                        setCommentArr={setCommentArr}
                        number={number}
                        setNumber={setNumber}
                        comment_total={list.comment_total}
                        paramsId={id}
                      />
                    ))}
                  <AddCommentContainer>
                    <AddCommentWrap>
                      <MyProfile>
                        <MyProfileSvg>
                          <path d="M12 12c5.523 0 10 4.477 10 10v2H2v-2c0-5.523 4.477-10 10-10zm0-1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 1 1 0 11z"></path>
                        </MyProfileSvg>
                      </MyProfile>
                      <AddCommentInput
                        type="text"
                        placeholder="댓글 추가"
                        value={commentText}
                        onClick={handleInput}
                        onChange={handleChange}
                        clickInput={clickInput}
                      ></AddCommentInput>
                    </AddCommentWrap>
                    <AddCommentButtonWrap clickInput={clickInput}>
                      <AddCommentButton>
                        <ButtonCancel
                          onClick={handleCancel}
                          clickCancel={clickCancel}
                        >
                          취소
                        </ButtonCancel>
                        <ButtonComplete
                          onClick={handleDone}
                          changeColor={changeColor}
                        >
                          완료
                        </ButtonComplete>
                      </AddCommentButton>
                    </AddCommentButtonWrap>
                  </AddCommentContainer>
                </div>
              </RightBodyContainer>
              {/* <RightBottomContainer>
                <RightBottomWrap>
                  <ProfileImage></ProfileImage>
                  <BottomText>
                    <strong>Mas Bro</strong>님이 <strong>gaya foto cuy</strong>
                    에 저장
                  </BottomText>
                </RightBottomWrap>
              </RightBottomContainer> */}
            </FeedRight>
          </MainFeed>
        </MainWrap>
      </MainContainer>
    </MainDetailPage>
  );
};

export default withRouter(MainDetail);

const MainDetailPage = styled.div`
  font-family: Roboto;
  color: #211922;
  margin-bottom: 32px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  cursor: zoom-out;
`;

const MainContainer = styled.div`
  padding-top: 120px;
`;

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const BackButtonWrap = styled.div`
  display: flex;
  margin-left: 24px;
  margin-top: 15px;
  padding: 4px;
  align-items: center;
  left: 0;
  position: fixed;
`;

const MainFeed = styled.div`
  display: flex;
  max-width: 1016px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px;
  position: relative;
  background-color: #fff;
`;

const RightNavContainer = styled.div`
  padding: 20px 20px 16px 28px;
`;

const RightNavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 460px;
  height: 44px;
`;

const IconWrap = styled.div`
  display: flex;
`;

const BackButtonIconWrap = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  width: 44px;
  height: 44px;
  outline: none;
  background-color: white;
  &:hover {
    background-color: #dfe4ea;
  }
`;

const BackButtonIcon = styled.i.attrs({ className: "fas fa-arrow-left" })`
  font-size: 20px;
`;

const BackButtonTextWrap = styled.div`
  cursor: pointer;
`;

const BackButtonText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  padding: 8px;
`;

const FeedLeft = styled.div`
  width: 508px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
  }
`;

/* display: flex;
   content: 'blog';
   align-items: center;
   width: 100%;
   position: absolute;
   top: 0;
   height: 100%;
   background-color: black;
   opacity: 0.5;
   z-index: 1;
   justify-content: center;
   color: red; */

// const FeedImage = styled.img``;

const FeedRight = styled.div`
  width: 508px;
  position: relative;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
`;

const IconMoreWrap = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #dfe4ea;
  }
`;

const IconMore = styled.span`
  font-family: "Material Icons";
  font-size: 28px;
`;

const IconShareWrap = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #dfe4ea;
  }
`;

const IconShare = styled.img.attrs({ src: iconShare })`
  width: 22px;
`;

const RightTopContainer = styled.div`
  padding: 0 40px;
`;

const RightTopWrap = styled.div`
  h1 {
    font-size: 36px;
    font-weight: 700;
    padding-top: 25px;
  }
  h3 {
    font-size: 14px;
    font-weight: 400;
    padding-top: 25px;
  }
`;

const RightBodyContainer = styled.div`
  padding: 0 40px;
`;

const CommentTopContainer = styled.div`
  height: 52px;
  margin-top: 50px;
`;

const CommentTopText = styled.span`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 7px;
  border-bottom: 3px solid black;
  color: #111111;
`;

const AddCommentContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`;

const AddCommentWrap = styled.div`
  display: flex;
`;

const AddCommentInput = styled.textarea`
  width: 100%;
  margin-left: 8px;
  flex: 1;
  resize: none;
  border-radius: 26px;
  border: 1px solid #ddd;
  padding: 12px 12px 12px 16px;
  outline: none;
  font-size: 16px;
  color: #211922;
  overflow: hidden;
  height: ${(props) => (props.clickInput ? "87px" : "48px")};
  &::placeholder {
    color: ${(props) => props.clickInput && "transparent"};
  }
  /* &:focus {
    height: 87px;
  } */
  /* &:focus::placeholder {
    color: transparent;
    text-align: center;
  } */
`;

const AddCommentButtonWrap = styled.div`
  display: ${(props) => (props.clickInput ? "block" : "none")};
  margin-bottom: 30px;
`;

const AddCommentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const ButtonCancel = styled.button`
  width: 60px;
  height: 40px;
  cursor: pointer;
  background-color: #efefef;
  padding: 8px 12px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #111;
  outline: none;
  border: 0;
`;

const ButtonComplete = styled(ButtonCancel)`
  color: #767676;
  margin-left: 10px;
  color: ${(props) => (props.changeColor ? "#FFFFFF" : "#767676")};
  background-color: ${(props) => (props.changeColor ? "#e60023" : "#efefef")};
`;

// const RightBottomContainer = styled.div`
//   padding: 0 40px;
//   position: absolute;
//   bottom: 20px;
// `;

// const RightBottomWrap = styled.div`
//   box-sizing: border-box;
//   color: #211922;
//   display: flex;
//   align-items: center;
// `;

// const BottomText = styled.div`
//   padding: 0 10px;
// `;

// const ProfileImage = styled.img.attrs({ src: profileMock })`
//   border-radius: 50%;
//   width: 32px;
// `;

const MyProfile = styled.div``;

const MyProfileSvg = styled.svg.attrs({ viewBox: "-3 -7 30 30" })`
  border-radius: 50%;
  background-color: #efefef;
  width: 48px;
  height: 48px;
`;

/* display: flex;
   content: 'blog';
   align-items: center;
   width: 100%;
   position: absolute;
   top: 0;
   height: 100%;
   background-color: black;
   opacity: 0.5;
   z-index: 1;
   justify-content: center;
   color: red; */
