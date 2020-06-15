import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Header from "./../../components/Header";
import Boards from "./Boards";
import Pins from "./Pins";
import Topics from "./Topics";
import MakingBoard from "./MakingBoard";

const Select = {
  0: <Boards />,
  1: <Pins />,
  2: <Topics />,
};

const MyPage = () => {
  const [tab, setTab] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  //const [subjectTab, setSubjectTab] = useState(false);

  //최초에 렌더링이 되고 받아온 response 객체 안의 data배열을 참조하여 setData 에 넣어주는데,  이때 useEffect 내부에서 state 값을 변경시킨 결과로 컴포넌트의 재렌더링이 일어날 수 있으므로 이를 막기 위해 두번째 인자로 빈 배열을 전달한다.(배열 내에서 변화가 감지될때만 useEffect를실행한다)
  // useEffect(() => {
  //   axios.get("URL").then(({ data }) => setData(data));
  // }, []);

  const closeDropdown = () => {
    closeModal();
    if (dropdown) {
      setDropdown(false);
    }
  };

  const closeModal = () => {
    if (modal) {
      setModal(false);
    }
  };

  const openModal = () => {
    setModal(true);
  };

  // useEffect(() => {
  //   axios.get("/data/data.json").then(({ data }) => setData(data.data));
  // }, []);

  return (
    <AppContent onClick={closeDropdown}>
      <Header />
      {modal ? <MakingBoard /> : null}
      {/* <MakingBoard /> */}
      <div className="MainContainer">
        <IconBar>
          <IconBarInside>
            <IconsWrapper>
              <div className="add-contents">
                <MypageButtonAdd onClick={() => setDropdown(!dropdown)}>
                  <Icon>
                    <SvgWrapper>
                      <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
                    </SvgWrapper>
                  </Icon>
                </MypageButtonAdd>
                <DropdownContent isActive={dropdown}>
                  <Making onClick={openModal}>보드 만들기</Making>
                  <Making2 to="/pin-builder">핀 만들기</Making2>
                </DropdownContent>
              </div>
              <div className="profile-edditor ">
                <MypageButtonSetting to="/setting">
                  <Icon>
                    <SvgWrapper>
                      <path d="M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z"></path>
                    </SvgWrapper>
                  </Icon>
                </MypageButtonSetting>
              </div>
              <div className="share-profile">
                <MypageButton>
                  <Icon>
                    <SvgWrapper>
                      <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"></path>
                    </SvgWrapper>
                  </Icon>
                </MypageButton>
              </div>
            </IconsWrapper>
          </IconBarInside>
        </IconBar>
        <ProfileWrapper>
          <ProfileInfo>
            <TextInfo>
              <h1>Jia K</h1>
              <span>팔로워 0명</span>
              <span>팔로잉 23명</span>
            </TextInfo>
            <PictureInfo>
              <MyImage
                src="https://s.pinimg.com/images/user/default_280.png"
                alt="bio-photo"
              ></MyImage>
            </PictureInfo>
          </ProfileInfo>
        </ProfileWrapper>
        <MiddleNav>
          <Subject>
            <SubjectTab onClick={() => setTab(0)}>보드</SubjectTab>
            <SubjectTab onClick={() => setTab(1)}>핀</SubjectTab>
            <SubjectTab onClick={() => setTab(2)}>주제</SubjectTab>
          </Subject>
        </MiddleNav>
        {Select[tab]}
      </div>
    </AppContent>
  );
};

export default withRouter(MyPage);

const AppContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 80px;
`;

const ProfileWrapper = styled.div`
  width: 100%;
`;

const IconBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: start;
  align-content: center;
  padding: 8px auto;
  margin: 4px auto;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.97);
  position: fixed;
  z-index: 9;
  top: 80px;
`;

const IconBarInside = styled.div`
  max-width: 800px;
  width: 100%;
  align-items: center;
  margin: 0 auto;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  flex-direction: row;
  width: 33.33%;
`;

const Icon = styled.div`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  position: relative;
  &:hover {
    background: rgb(220, 218, 218);
  }
`;

const SvgWrapper = styled.svg`
  color: #767676;
  height: 48px;
  width: 48px;
  fill: currentColor;
  stroke-width: 0;
  vertical-align: middle;
  cursor: pointer;
  position: absolute;
  top: 25%;
  left: 12px;
  path {
    margin: auto;
    padding: auto;
    height: 20px;
    width: 20px;
  }
`;

const MypageButtonAdd = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: transparent;
  position: relative;
  display: inline-block;
  outline-style: none;
`;
//Hidden by Default
const DropdownContent = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 32x solid rgb(195, 195, 195);
  background: #ffff;
`;
const Making = styled.button`
  text-decoration: none;
  border: none;
  display: block;
  width: 200px;
  text-align: left;
  height: 40px;
  font-weight: 600;
  line-height: 1.5;
  padding-left: 10px;
  padding-top: 10px;
  color: black;
  &:hover {
    background: rgb(195, 195, 195);
  }
`;

const Making2 = Making.withComponent(Link);

const MypageButtonSetting = styled(Link)`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: transparent;
`;

const MypageButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: transparent;
`;

const ProfileInfo = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 140px auto auto;
`;

const Subject = styled.div`
  display: flex;
  min-height: 48px;
  margin: auto;
  width: 250px;
`;

const SubjectTab = styled.button`
  display: flex;
  min-width: 60px;
  font-size: 16px;
  font-weight: 700;
  color : ${(subjectTab) => (SubjectTab ? "white" : "black")}
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  background: transparent;
  outline-style: none;
  :active {
    border: 3px solid skyblue;
  }
  &:hover {
    background: rgb(220, 218, 218);
    text-decoration: underline;
    border-radius: 20px;
  }
`;

const MiddleNav = styled.div`
  display: flex;
  /* height: 2000px; */
`;

const PictureInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextInfo = styled.div`
  width: 75%;
  padding-left: 8px;
  padding-right: 8px;
  h1 {
    margin-bottom: 5px;
    text-align: left;
    font-size: 30px;
    font-weight: 600;
  }
  span {
    margin-right: 10px;
    font-weight: 600;
  }
`;

const MyImage = styled.img`
  height: 106px;
  width: 106px;
`;

// const SelectedContent = styled.div``;
