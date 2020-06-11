import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import detailMock from "../../images/detailMock.jpg";
import iconShare from "../../images/iconShare.png";
import profileMock from "../../images/profileMock.jpg";

const MainDetail = () => {
  const [like, setLike] = useState(false);
  const [clickInput, setClickInput] = useState(false);
  const [clickCancel, setClickCancel] = useState(false);
  const [clickDone, setClickDone] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [clickDropdown, setClickDropdown] = useState(false);
  const [enterBoard, setEnterBoard] = useState(false);

  const handleInput = () => {
    if (clickInput === false) {
      setClickInput(true);
    }
    console.log(clickInput);
  };

  const handleCancel = () => {
    setClickCancel(!clickCancel);
    setClickInput(false);
  };

  const handleColor = (e) => {
    if (e.target.value.length > 0) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const handleDropdown = () => {
    setClickDropdown(!clickDropdown);
  };

  const boardEnter = () => {
    setEnterBoard(true);
  };

  const boardLeave = () => {
    setEnterBoard(false);
  };

  return (
    <MainDetailPage>
      <MainContainer>
        <MainWrap>
          <BackButtonWrap>
            <BackButtonIconWrap>
              <BackButtonIcon></BackButtonIcon>
            </BackButtonIconWrap>
            <BackButtonTextWrap>
              <BackButtonText>추천</BackButtonText>
            </BackButtonTextWrap>
          </BackButtonWrap>
          <MainFeed>
            <FeedLeft>
              <FeedImage />
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
                  <ButtonWrap>
                    <DropdownNav
                      onClick={handleDropdown}
                      clickDropdown={clickDropdown}
                    >
                      <DropdownLeft>
                        <DropdownText>포즈 참조</DropdownText>
                        <IconArrowWrap>
                          <IconArrow>keyboard_arrow_down</IconArrow>
                        </IconArrowWrap>
                      </DropdownLeft>
                    </DropdownNav>
                    <ButtonSave clickDropdown={clickDropdown}>
                      <ButtonSaveText>저장</ButtonSaveText>
                    </ButtonSave>
                    <DropdownWrap clickDropdown={clickDropdown}>
                      <DropdownTop>
                        <input type="text" placeholder="검색" />
                        <i class="fas fa-search"></i>
                      </DropdownTop>
                      <DropdownBody>
                        <BoardAllTitle>모든 보드</BoardAllTitle>

                        <BoardContentContainer
                          onMouseEnter={boardEnter}
                          onMouseLeave={boardLeave}
                        >
                          <BoardContentWrap>
                            <BoardContent>
                              <BoardImage></BoardImage>
                              <BoardTitle>남성 캐주얼 스타일</BoardTitle>
                            </BoardContent>
                            <BoardSave enterBoard={enterBoard}>저장</BoardSave>
                          </BoardContentWrap>
                        </BoardContentContainer>

                        <BoardContentContainer>
                          <BoardContentWrap>
                            <BoardContent>
                              <BoardImage></BoardImage>
                              <BoardTitle>남성 캐주얼 스타일</BoardTitle>
                            </BoardContent>
                            <BoardSave>저장</BoardSave>
                          </BoardContentWrap>
                        </BoardContentContainer>

                        <BoardRecommendTitle>
                          추천 보드 이름
                        </BoardRecommendTitle>

                        <BoardContentContainer>
                          <BoardContentWrap>
                            <BoardContent>
                              <BoardImage></BoardImage>
                              <BoardTitle>남성 캐주얼 스타일</BoardTitle>
                            </BoardContent>
                            <BoardSave>저장</BoardSave>
                          </BoardContentWrap>
                        </BoardContentContainer>

                        <BoardContentContainer>
                          <BoardContentWrap>
                            <BoardContent>
                              <BoardImage></BoardImage>
                              <BoardTitle>남성 캐주얼 스타일</BoardTitle>
                            </BoardContent>
                            <BoardSave>저장</BoardSave>
                          </BoardContentWrap>
                        </BoardContentContainer>

                        <BoardContentContainer>
                          <BoardContentWrap>
                            <BoardContent>
                              <BoardImage></BoardImage>
                              <BoardTitle>남성 캐주얼 스타일</BoardTitle>
                            </BoardContent>
                            <BoardSave>저장</BoardSave>
                          </BoardContentWrap>
                        </BoardContentContainer>

                        <BoardContentContainer>
                          <BoardContentWrap>
                            <BoardContent>
                              <BoardImage></BoardImage>
                              <BoardTitle>남성 캐주얼 스타일</BoardTitle>
                            </BoardContent>
                            <BoardSave>저장</BoardSave>
                          </BoardContentWrap>
                        </BoardContentContainer>

                        <BoardContentContainer>
                          <BoardContentWrap>
                            <BoardContent>
                              <BoardImage></BoardImage>
                              <BoardTitle>남성 캐주얼 스타일</BoardTitle>
                            </BoardContent>
                            <BoardSave>저장</BoardSave>
                          </BoardContentWrap>
                        </BoardContentContainer>

                        <BoardContentContainer>
                          <BoardContentWrap>
                            <BoardContent>
                              <BoardImage></BoardImage>
                              <BoardTitle>남성 캐주얼 스타일</BoardTitle>
                            </BoardContent>
                            <BoardSave>저장</BoardSave>
                          </BoardContentWrap>
                        </BoardContentContainer>
                      </DropdownBody>
                      <DropdownBottom>
                        <BottomIcon>
                          <i class="fas fa-plus-circle"></i>
                        </BottomIcon>
                        <BottomTitle>보드 만들기</BottomTitle>
                      </DropdownBottom>
                    </DropdownWrap>
                  </ButtonWrap>
                </RightNavWrap>
              </RightNavContainer>
              <RightTopContainer>
                <RightTopWrap>
                  <div>blog.naver.com</div>
                  <h1>Blah Blah</h1>
                </RightTopWrap>
              </RightTopContainer>
              <RightBodyContainer>
                <div className="rightBodyWrap">
                  <CommentTopContainer>
                    <CommentTopText>댓글 1개</CommentTopText>
                  </CommentTopContainer>
                  <CommentBodyContainer>
                    <MyProfile>
                      <MyProfileSvg>
                        <path d="M12 12c5.523 0 10 4.477 10 10v2H2v-2c0-5.523 4.477-10 10-10zm0-1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 1 1 0 11z"></path>
                      </MyProfileSvg>
                    </MyProfile>
                    <CommentBodyWrap>
                      <CommentTextWrap>
                        <CommentInfo>
                          <CommentId>정엽</CommentId>
                          <CommentDate>1시간</CommentDate>
                        </CommentInfo>
                        <CommentContentWrap>
                          <CommentContent>asddasdjkhasdj</CommentContent>
                        </CommentContentWrap>
                      </CommentTextWrap>
                      <CommentIconWrap>
                        <CommentIconHeart onClick={() => setLike(!like)}>
                          <Heart like={like}></Heart>
                        </CommentIconHeart>
                        <CommentIconComment>
                          <Comment></Comment>
                        </CommentIconComment>
                        <CommentIconMore>
                          <More></More>
                        </CommentIconMore>
                      </CommentIconWrap>
                    </CommentBodyWrap>
                  </CommentBodyContainer>
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
                        onClick={handleInput}
                        onChange={handleColor}
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
                          onClick={() => setClickDone(!clickDone)}
                          changeColor={changeColor}
                        >
                          완료
                        </ButtonComplete>
                      </AddCommentButton>
                    </AddCommentButtonWrap>
                  </AddCommentContainer>
                </div>
              </RightBodyContainer>
              <RightBottomContainer>
                <RightBottomWrap>
                  <ProfileImage></ProfileImage>
                  <BottomText>
                    <strong>Mas Bro</strong>님이 <strong>gaya foto cuy</strong>
                    에 저장
                  </BottomText>
                </RightBottomWrap>
              </RightBottomContainer>
            </FeedRight>
          </MainFeed>
        </MainWrap>
      </MainContainer>
    </MainDetailPage>
  );
};

export default MainDetail;

const MainDetailPage = styled.div`
  font-family: Roboto;
  color: #211922;
  margin-bottom: 32px;
`;
const MainContainer = styled.div`
  padding-top: 80px;
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

const FeedImage = styled.img.attrs({ src: detailMock })`
  box-sizing: border-box;
  width: 100%;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  color: transparent;
`;

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

const ButtonWrap = styled.div`
  display: flex;
  position: relative;
  width: 235px;
`;

const DropdownNav = styled.button`
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: #efefef;
  cursor: pointer;
  position: relative;
  border: none;
  padding: 0;
  height: 44px;
  outline: none;
  width: ${(props) => (props.clickDropdown ? "100%" : "180px")};
  border-top-right-radius: ${(props) =>
    props.clickDropdown ? "12px" : "none"};
  border-bottom-right-radius: ${(props) =>
    props.clickDropdown ? "12px" : "none"};
  &:hover {
    background-color: #dfe4ea;
  }
`;

const DropdownLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 100%;
`;

const DropdownText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #111;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const IconArrowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconArrow = styled.span`
  font-family: "Material Icons";
  font-size: 25px;
`;

const ButtonSave = styled.button`
  width: 55px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 0 16px;
  background-color: #e60023;
  border: none;
  cursor: pointer;
  outline: none;
  display: ${(props) => (props.clickDropdown ? "none" : "display")};
`;

const ButtonSaveText = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

const RightTopContainer = styled.div`
  padding: 0 40px;
`;

const RightTopWrap = styled.div`
  div {
    font-size: 16px;
    font-weight: 400;
  }
  h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 25px;
  }
`;

const RightBodyContainer = styled.div`
  padding: 0 40px;
`;

const RightBottomContainer = styled.div`
  padding: 0 40px;
  position: absolute;
  bottom: 20px;
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

const RightBottomWrap = styled.div`
  box-sizing: border-box;
  color: #211922;
  display: flex;
  align-items: center;
`;

const CommentBodyContainer = styled.div`
  padding: 16px 0;
  display: flex;
`;

const ProfileImage = styled.img.attrs({ src: profileMock })`
  border-radius: 50%;
  width: 32px;
`;

const BottomText = styled.div`
  padding: 0 10px;
`;

const MyProfile = styled.div``;

const MyProfileSvg = styled.svg.attrs({ viewBox: "-3 -7 30 30" })`
  border-radius: 50%;
  background-color: #efefef;
  width: 48px;
  height: 48px;
`;

const CommentBodyWrap = styled.div`
  margin-left: 8px;
  flex: 1;
`;

const CommentTextWrap = styled.div`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 16px;
`;

const CommentInfo = styled.div`
  display: flex;
`;

const CommentId = styled.div`
  padding-left: 2px;
  padding-right: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const CommentDate = styled.div`
  padding: 0 4px;
  font-size: 14px;
  font-weight: 400;
  color: #767676;
`;

const CommentContentWrap = styled.div`
  white-space: pre-wrap;
  padding: 2px;
`;

const CommentContent = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const CommentIconWrap = styled.div`
  display: flex;
  padding: 4px;
`;

const CommentIconHeart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 4px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #dfe4ea;
  }
`;

const Heart = styled.i.attrs({ className: "fas fa-heart" })`
  font-size: 16px;
  color: ${(props) => (props.like ? "#e60023" : "black")};
  &:focus {
    color: #e60023;
  }
`;

const CommentIconComment = styled(CommentIconHeart)``;

const Comment = styled.i.attrs({ className: "fas fa-comment" })`
  font-size: 16px;
`;

const CommentIconMore = styled(CommentIconHeart)``;

const More = styled.i.attrs({ className: "fas fa-ellipsis-h" })`
  font-size: 16px;
`;

const AddCommentContainer = styled.div``;

const AddCommentWrap = styled.div`
  display: flex;
`;

const AddCommentInput = styled.textarea`
  width: 100%;
  height: 45px;
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
  height: ${(props) => (props.clickInput ? "87px" : "45px")};
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
  }
`;

const DropdownWrap = styled.div`
  width: 320px;
  position: absolute;
  left: -30px;
  top: 50px;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: ${(props) => (props.clickDropdown ? "block" : "none")};
`;
const DropdownTop = styled.div`
  padding: 12px;
  width: 100%;
  position: relative;
  input {
    width: 100%;
    height: 48px;
    border: 2px solid #ddd;
    border-radius: 999px;
    padding: 8px 40px;
    font-size: 16px;
  }
  i {
    position: absolute;
    left: 29px;
    top: 29px;
  }
`;

const DropdownBody = styled.div`
  height: 322px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const BoardAllTitle = styled.div`
  padding: 4px 12px;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
`;

const BoardContentContainer = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoardContentWrap = styled.div`
  width: 100%;
  height: 52px;
  margin: 4px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  &:hover {
    background-color: #dfe4ea;
  }
`;

const BoardContent = styled.div`
  display: flex;
  align-items: center;
`;

const BoardImage = styled.div`
  width: 36px;
  height: 36px;
  margin: 4px 12px 4px 8px;
  background-color: #efefef;
  border-radius: 4px;
`;

const BoardTitle = styled.div`
  margin-left: 4px;
  padding: 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 700;
`;

const BoardSave = styled.div`
  margin-right: 10px;
  padding: 11px 15px;
  border-radius: 20px;
  color: white;
  background-color: #e60023;
  font-size: 16px;
  display: ${(props) => (props.enterBoard ? "block" : "none")};
`;

const BoardRecommendTitle = styled(BoardAllTitle)``;

const DropdownBottom = styled.div`
  height: 52px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  border-top: 1px solid #dfe4ea;
  &:hover {
    background-color: #dfe4ea;
  }
`;

const BottomIcon = styled.div`
  margin: 0 20px 0 16px;
  i {
    font-size: 28px;
    color: #e60023;
  }
`;

const BottomTitle = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
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
