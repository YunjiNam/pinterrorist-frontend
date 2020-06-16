import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { GoogleLogout } from "react-google-login";

const Header = ({ history, search }) => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(0);
  const [noti, setNoti] = useState(false);
  const [noticeList, setNoticeList] = useState([]);
  const [drop, setDrop] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    fetch("http://localhost:3000/data/mainList.json")
      .then((res) => res.json())
      .then((res) => setNoticeList(res.data));
  }, []);

  const logout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  const clickReload = () => {
    window.location.reload();
  };

  const onChange = (e) => {
    setSearchValue(e.target.value);
    // console.log(e.target);
    if (e.key === "Enter") {
      search(searchValue);
      e.target.value = "";
    }
  };

  return (
    <>
      <SearchOverlay active={active} />
      <Headers>
        <HeaderContent>
          <HeaderWrap>
            <Logo onClick={clickReload}>
              <Link>
                <svg viewBox="0 0 24 24">
                  <circle />
                  <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" />
                </svg>
              </Link>
            </Logo>
            <Home pg={page} onClick={() => setPage(0)}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span>홈</span>
              </Link>
            </Home>
            <Following pg={page} onClick={() => setPage(1)}>
              <Link to="/following" style={{ textDecoration: "none" }}>
                <span>팔로잉</span>
              </Link>
            </Following>
            <Search onClick={searchActive}>
              <SearchWrap>
                <IconWrap act={active}>
                  <svg viewBox="0 0 24 24">
                    <path />
                  </svg>
                </IconWrap>
                <InputWrap>
                  <input type="text" placeholder="검색" onKeyPress={onChange} />
                </InputWrap>
              </SearchWrap>
            </Search>
            <SuggestionMenu active={active}>
              <SuggestTitle>
                <div>추천 아이디어</div>
              </SuggestTitle>
              <SuggestList>
                <div>
                  <ImgWrap>
                    <div>
                      <img
                        alt="suggest"
                        src="https://i.pinimg.com/originals/da/9c/4d/da9c4da8c65210f624ee91db7623cac6.png"
                      />
                    </div>
                    <span>포스터</span>
                  </ImgWrap>
                </div>
                <div>
                  <ImgWrap>
                    <div>
                      <img
                        alt="suggest"
                        src="https://i.pinimg.com/originals/da/9c/4d/da9c4da8c65210f624ee91db7623cac6.png"
                      />
                    </div>
                    <span>포스터</span>
                  </ImgWrap>
                </div>
                <div>
                  <ImgWrap>
                    <div>
                      <img
                        alt="suggest"
                        src="https://i.pinimg.com/originals/da/9c/4d/da9c4da8c65210f624ee91db7623cac6.png"
                      />
                    </div>
                    <span>포스터</span>
                  </ImgWrap>
                </div>
                <div>
                  <ImgWrap>
                    <div>
                      <img
                        alt="suggest"
                        src="https://i.pinimg.com/originals/da/9c/4d/da9c4da8c65210f624ee91db7623cac6.png"
                      />
                    </div>
                    <span>포스터</span>
                  </ImgWrap>
                </div>
                <div>
                  <ImgWrap>
                    <div>
                      <img
                        alt="suggest"
                        src="https://i.pinimg.com/originals/da/9c/4d/da9c4da8c65210f624ee91db7623cac6.png"
                      />
                    </div>
                    <span>포스터</span>
                  </ImgWrap>
                </div>
              </SuggestList>
            </SuggestionMenu>
            <Tab>
              <NoticeWrap view={noti} onClick={() => setNoti(!noti)}>
                <button>
                  <svg viewBox="0 0 24 24">
                    <path />
                  </svg>
                </button>
              </NoticeWrap>
              <NoticeBox view={noti}>
                <div>
                  <NoticeTitle>
                    <div>업데이트</div>
                  </NoticeTitle>
                  <NoticeContents>
                    <div>
                      <NoticeListWrap>
                        {noticeList &&
                          noticeList.map((list, idx) => (
                            <li key={idx}>
                              <ListWrapper>
                                <ListTitle>
                                  <div>
                                    <span>
                                      Yj 님이 좋아할 만한 앱 디자인 관련 보드
                                    </span>
                                  </div>
                                </ListTitle>
                                <ListContent>
                                  <ContentsWrapF>
                                    <div>
                                      <img src={list.url[0]} alt={list.id} />
                                    </div>
                                  </ContentsWrapF>
                                  <ContentsWrapS>
                                    <div>
                                      <img src={list.url[1]} alt={list.id} />
                                    </div>
                                  </ContentsWrapS>
                                  <ContentsWrapT>
                                    <div>
                                      <img src={list.url[2]} alt={list.id} />
                                    </div>
                                  </ContentsWrapT>
                                </ListContent>
                              </ListWrapper>
                            </li>
                          ))}
                      </NoticeListWrap>
                    </div>
                  </NoticeContents>
                </div>
              </NoticeBox>
              <MessageWrap>
                <button>
                  <svg viewBox="0 0 24 24">
                    <path />
                  </svg>
                </button>
              </MessageWrap>
              <ProfileWrap
                onClick={() => {
                  history.push("/mypage");
                }}
              >
                <button>
                  <svg viewBox="0 -8 24 30">
                    <path />
                  </svg>
                </button>
              </ProfileWrap>
              <DropWrap view={drop} onClick={() => setDrop(!drop)}>
                <button>
                  <svg viewBox="0 0 24 24">
                    <path />
                  </svg>
                </button>
              </DropWrap>
              <DropList view={drop}>
                <DropTitle>설정</DropTitle>
                <DropContent>
                  <li>설정</li>
                  <li>홈피드 조정</li>
                  <li>Chrome 앱 설치</li>
                  <li>도움 받기</li>
                  <li>약관 및 개인정보 보기</li>
                  <GoogleLogout
                    clientId="578598922898-c7jnnn5j6r4phjad623ovcipptruuqnd.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <li
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        로그아웃
                      </li>
                    )}
                    onLogoutSuccess={logout}
                  ></GoogleLogout>
                </DropContent>
              </DropList>
            </Tab>
          </HeaderWrap>
        </HeaderContent>
      </Headers>
    </>
  );
};

export default withRouter(Header);

const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 600;
  background-color: rgba(0, 0, 0, 0.3);
  overscroll-behavior: none;
  display: ${(props) => (props.active ? "block" : "none")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: all 0.4s ease-in-out;
`;

const Headers = styled.div`
  z-index: 671;
  position: fixed;
  top: 0;
  width: 100%;
  display: block;
  background-color: #fff;
`;

const HeaderContent = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4px 16px;
  min-height: 0;
  min-width: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 8px -8px;
  transition: box-shadow 300ms ease-in-out 0s;
`;

const HeaderWrap = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
  svg {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    circle {
      cx: 24;
      cy: 24;
      fill: white;
      r: 40;
    }

    path {
      fill: rgb(230, 0, 35);
      fill-rule: evenodd;
    }
  }
`;

const Home = styled.div`
  height: 48px;
  min-width: 60px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  cursor: pointer;
  ${(props) =>
    props.pg === 0
      ? css`
          background-color: #111;
          /* color: #fff; */
          span {
            color: #fff;
          }
        `
      : css`
          background-color: #fff;
          /* color: #000; */
          span {
            color: #333;
          }
          &:hover {
            background-color: #efefef;
          }
        `}
  /* &:hover {
    background-color: #efefef;
  } */
  span {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    /* color: #fff; */
    padding: 0px 16px;
  }
`;

const Following = styled.div`
  height: 48px;
  min-width: 60px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.pg === 1
      ? css`
          background-color: #111;
          span {
            color: #fff;
          }
        `
      : css`
          background-color: #fff;
          /* color: #; */
          span {
            color: #333;
          }
          &:hover {
            background-color: #efefef;
          }
          &:hover {
            background-color: #efefef;
          }
        `}
  /* &:hover {
    background-color: #efefef;
  } */
  span {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    /* color: #333; */
    padding: 0px 16px;
  }
`;

const Search = styled.div`
  min-width: 300px;
  height: 48px;
  margin: 0 8px;
  background-color: #efefef;
  border-radius: 24px;
  flex: 1 1 auto;
  min-height: 0;
  &:hover {
    background-color: #e3e3e3;
  }
`;

const SearchWrap = styled.div`
  padding: 0 8px 0 16px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const IconWrap = styled.div`
  margin-right: 8px;
  flex: 0 0 auto;
  display: ${(props) => (props.act ? "none" : "block")};
  svg {
    color: #767676;
    width: 16px;
    height: 16px;
    fill: currentColor;
    stroke-width: 0;
    vertical-align: middle;
    path {
      d: path(
        "M 10 16 c -3.31 0 -6 -2.69 -6 -6 s 2.69 -6 6 -6 s 6 2.69 6 6 s -2.69 6 -6 6 m 13.12 2.88 l -4.26 -4.26 A 9.842 9.842 0 0 0 20 10 c 0 -5.52 -4.48 -10 -10 -10 S 0 4.48 0 10 s 4.48 10 10 10 c 1.67 0 3.24 -0.41 4.62 -1.14 l 4.26 4.26 a 3 3 0 0 0 4.24 0 a 3 3 0 0 0 0 -4.24"
      );
      color: #767676;
      fill: currentColor;
      stroke-width: 0;
    }
  }
`;

const InputWrap = styled.div`
  width: 100%;
  input {
    color: #333;
    font-size: 16px;
    width: 100%;
    vertical-align: middle;
    outline: none;
    padding: 0;
    background-color: transparent;
    border: none;
  }
`;

const SuggestionMenu = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: all 0.4s ease-in-out;
  position: fixed;
  top: 75px;
  width: 75%;
  min-width: 300px;
  height: 500px;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  /* flex: 1 1 auto; */
  min-height: 0;
`;

const SuggestTitle = styled.div`
  margin: 30px;
  div {
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    color: #2d2d2d;
    font-family: "roboto";
  }
`;

const SuggestList = styled.div`
  margin: 30px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  /* justify-content: space-between;
  align-items: center;
  flex-direction: row; */
  margin: 0 auto;
  div {
  }
`;

const ImgWrap = styled.div`
  border-radius: 24px;
  width: 220px;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  div {
    background-color: #000;
    position: relative;
    img {
      border-radius: 24px;
      width: 100%;
      opacity: 0.7;
      background-color: #000;
    }
  }
  span {
    position: absolute;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
  }
`;

const Tab = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const NoticeWrap = styled.div`
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #efefef;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    border: none;
    padding: 4px;
    cursor: pointer;
    background: transparent;
    outline: none;

    svg {
      height: 24px;
      width: 24px;
      color: ${(props) => (props.view ? "#2b2b2b" : "#767676")};
      fill: currentColor;
      stroke-width: 0;
      vertical-align: middle;
      path {
        d: path(
          "M 12 24 c -1.66 0 -3 -1.34 -3 -3 h 6 c 0 1.66 -1.34 3 -3 3 Z m 7 -10.83 c 1.58 1.52 2.67 3.55 3 5.83 H 2 c 0.33 -2.28 1.42 -4.31 3 -5.83 V 7 c 0 -3.87 3.13 -7 7 -7 s 7 3.13 7 7 v 6.17 Z"
        );
      }
    }
  }
`;

const NoticeBox = styled.div`
  display: ${(props) => (props.view ? "block" : "none")};
  transition: all 0.4s ease-in-out;
  height: calc((100vh - 80px) - 8px);
  width: 360px;
  margin-top: 80px;
  box-shadow: rgba(0, 0, 0, 0.1) -3px 4px 14px 0px;
  overscroll-behavior: none;
  overflow: auto;
  margin-right: 8px;
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 16px;
  background-color: #fff;
  color: #211922;
  font-size: 12px;
`;

const NoticeTitle = styled.div`
  padding: 23px 0;

  div {
    font-weight: 700;
    font-size: 16px;
    text-align: center;
  }
`;

const NoticeContents = styled.div`
  height: calc(100% - 64px);
  /* overflow: auto; */
  div {
  }
`;

const NoticeListWrap = styled.ul`
  li {
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
`;

const ListWrapper = styled.div`
  width: 344px;
  margin: 0 8px 16px 8px;
  cursor: pointer;
  border-radius: 16px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ListTitle = styled.div`
  position: relative;
  margin-bottom: 10px;
  div {
    color: #333;
    font-size: 16px;
    font-weight: 400;
    span {
      text-align: left;
      line-height: 1.4;
    }
  }
`;

const ListContent = styled.div`
  width: 328px;
  height: 164px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
`;

const ContentsWrapF = styled.div`
  max-height: 164px;
  max-width: 108.7px;
  margin-right: 1px;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    img {
    }
  }
`;

const ContentsWrapS = styled.div`
  max-height: 164px;
  max-width: 108.7px;
  margin-right: 1px;
  overflow: hidden;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    img {
    }
  }
`;

const ContentsWrapT = styled.div`
  max-height: 164px;
  max-width: 108.7px;
  margin-right: 1px;
  overflow: hidden;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    img {
    }
  }
`;

const MessageWrap = styled.div`
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #efefef;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    border: none;
    padding: 4px;
    cursor: pointer;
    background: transparent;
    outline: none;

    svg {
      height: 24px;
      width: 24px;
      color: #767676;
      fill: currentColor;
      stroke-width: 0;
      vertical-align: middle;
      path {
        d: path(
          "M 18 12.5 a 1.5 1.5 0 1 1 0.001 -3.001 A 1.5 1.5 0 0 1 18 12.5 m -6 0 a 1.5 1.5 0 1 1 0.001 -3.001 A 1.5 1.5 0 0 1 12 12.5 m -6 0 a 1.5 1.5 0 1 1 0.001 -3.001 A 1.5 1.5 0 0 1 6 12.5 M 12 0 C 5.925 0 1 4.925 1 11 c 0 2.653 0.94 5.086 2.504 6.986 L 2 24 l 5.336 -3.049 A 10.93 10.93 0 0 0 12 22 c 6.075 0 11 -4.925 11 -11 S 18.075 0 12 0"
        );
      }
    }
  }
`;

const ProfileWrap = styled.div`
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #efefef;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    border: none;
    padding: 4px;
    cursor: pointer;
    background: transparent;
    outline: none;

    svg {
      height: 30px;
      width: 30px;
      color: #767676;
      fill: currentColor;
      stroke-width: 0;
      vertical-align: middle;
      border-radius: 50%;
      background-color: #efefef;
      path {
        d: path(
          "M 12 12 c 5.523 0 10 4.477 10 10 v 2 H 2 v -2 c 0 -5.523 4.477 -10 10 -10 Z m 0 -1 a 5.5 5.5 0 1 1 0 -11 a 5.5 5.5 0 1 1 0 11 Z"
        );
        fill: rgb(17, 17, 17);
      }
    }
  }
`;

const DropWrap = styled.div`
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #efefef;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    border: none;
    padding: 4px;
    cursor: pointer;
    background: transparent;
    outline: none;

    svg {
      height: 24px;
      width: 24px;
      color: ${(props) => (props.view ? "2b2b2b" : "#767676")};
      fill: currentColor;
      stroke-width: 0;
      vertical-align: middle;
      padding: 4px;
      path {
        d: path(
          "M 12 19.5 L 0.66 8.29 c -0.88 -0.86 -0.88 -2.27 0 -3.14 c 0.88 -0.87 2.3 -0.87 3.18 0 L 12 13.21 l 8.16 -8.06 c 0.88 -0.87 2.3 -0.87 3.18 0 c 0.88 0.87 0.88 2.28 0 3.14 L 12 19.5 Z"
        );
      }
    }
  }
`;

const DropList = styled.div`
  display: ${(props) => (props.view ? "block" : "none")};
  transition: all 0.4s ease-in-out;
  height: 270px;
  width: 230px;
  margin-top: 80px;
  box-shadow: rgba(0, 0, 0, 0.1) -3px 4px 14px 0px;
  overscroll-behavior: none;
  overflow: auto;
  margin-right: 8px;
  position: fixed;
  top: 10px;
  right: 0;
  border-radius: 16px;
  background-color: #fff;
  color: #211922;
  font-size: 12px;
  padding: 0 20px;
`;

const DropTitle = styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 10px 10px 0;
  border-radius: 8px;
  min-height: 35px;
`;

const DropContent = styled.ul`
  li {
    font-size: 16px;
    font-weight: 700;
    padding: 10px;
    border-radius: 8px;
    min-height: 35px;
    cursor: pointer;

    &:hover {
      background-color: #efefef;
    }
  }
`;
