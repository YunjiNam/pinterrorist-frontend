import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import detailMock from "../../images/detailMock.jpg";
import iconShare from "../../images/iconShare.png";
import iconArrow from "../../images/iconArrow.png";
import profileMock from "../../images/profileMock.jpg";

const MainDetail = () => {
  const [like, setLike] = useState(false);

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
                    <DropdownContainer>
                      <DropdownLeft>
                        <DropdownText>포즈 참조</DropdownText>
                        <IconArrowWrap>
                          <IconArrow>keyboard_arrow_down</IconArrow>
                        </IconArrowWrap>
                      </DropdownLeft>
                    </DropdownContainer>
                    <ButtonSave>
                      <ButtonSaveText>저장</ButtonSaveText>
                    </ButtonSave>
                  </ButtonWrap>
                </RightNavWrap>
              </RightNavContainer>
              <RightTopContainer>
                <div className="rightTopWrap">
                  <div>blog.naver.com</div>
                  <div>
                    <h1>Blah Blah</h1>
                  </div>
                </div>
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
                        <CommentIconHeart>
                          <Heart></Heart>
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
                      ></AddCommentInput>
                    </AddCommentWrap>
                    <AddCommentButton>
                      <ButtonCancel>취소</ButtonCancel>
                      <ButtonComplete>완료</ButtonComplete>
                    </AddCommentButton>
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
  padding: 8px;
  margin: 2px 0 0 0;
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
`;

const DropdownContainer = styled.button`
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: #efefef;
  cursor: pointer;
  position: relative;
  border: none;
  padding: 0;
  height: 44px;
  outline: none;
`;

const DropdownLeft = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;

const DropdownText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #111;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const IconArrowWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IconArrow = styled.span`
  font-family: "Material Icons";
  font-size: 25px;
`;

const ButtonSave = styled.button`
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 0 16px;
  background-color: #e60023;
  border: none;
  cursor: pointer;
  outline: none;
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
  height: 16px;
  margin-left: 8px;
  flex: 1;
  resize: none;
  border-radius: 26px;
  border: 1px solid #ddd;
  padding: 16px;
  outline: none;
  font-size: 16px;
  color: #211922;
  overflow: hidden;
  &:focus {
    height: 87px;
  }
  &:focus::placeholder {
    color: transparent;
    text-align: center;
  }
`;

const AddCommentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  display: none;
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
