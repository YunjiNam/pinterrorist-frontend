import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { GoogleLogout } from "react-google-login";
import DropdownBackward from "./Dropdown/DropdownBackward";
import url from "../config";

const Header = ({ history, search }) => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(0);
  const [noti, setNoti] = useState(false);
  const [noticeList, setNoticeList] = useState([]);
  const [drop, setDrop] = useState(false);
  const [searchRec, setSearchRec] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [keywordClick, setKeywordClick] = useState(false);
  const [boardArr, setBoardArr] = useState([]);

  const searchActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    fetch("http://localhost:3000/data/mainList.json")
      .then((res) => res.json())
      .then((res) => setNoticeList(res.data));
    fetch("http://localhost:3000/data/searchRec.json")
      .then((res) => res.json())
      .then((res) => setSearchRec(res.data));
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
    setInputValue(e.target.value);
    if (e.keyCode === 13) {
      search(e.target.value);
      //   e.target.value = "";
      e.target.blur();
      setActive(false);
    }
  };
  const close = () => {
    setActive(false);
  };

  const goFollows = () => {
    setPage(1);
    history.push("/follows");
  };

  const keywordHandler = (keyword) => {
    setSearchValue(keyword);
    setInputValue(keyword);
    search(keyword);
    setActive(false);
    setKeywordClick(true);
  };

  const clearValue = () => {
    setInputValue("");
    setSearchValue("");
    setKeywordClick(false);
  };

  const showCart = () => {
    setNoti(!noti);
    const token = localStorage.getItem("Authorization");
    fetch(`${url}/boards`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setBoardArr(res.boards[0]["board"]["name"]);
      });
  };

  return (
    <>
      <SearchOverlay active={active} onClick={close} />
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
            <Following pg={page} onClick={goFollows}>
              {/* <Link to="/follows" style={{ textDecoration: "none" }}> */}
              <span>팔로잉</span>
              {/* </Link> */}
            </Following>
            <Search onClick={searchActive}>
              <SearchWrap>
                <IconWrap act={active}>
                  <svg viewBox="0 0 24 24">
                    <path />
                  </svg>
                </IconWrap>
                <InputWrap>
                  <input
                    type="text"
                    placeholder={keywordClick ? inputValue : "검색"}
                    onKeyUp={onChange}
                    // value={inputValue}
                    onFocus={clearValue}
                  />
                </InputWrap>
              </SearchWrap>
            </Search>
            <SuggestionMenu active={active}>
              <CurrentSearch show={searchValue}>
                <div>{searchValue}</div>
              </CurrentSearch>
              <SuggestTitle>
                <div>추천 아이디어</div>
              </SuggestTitle>
              <SuggestList>
                {searchRec &&
                  searchRec.map((list) => (
                    <div key={list.id}>
                      <ImgWrap onClick={() => keywordHandler(list.title)}>
                        <div>
                          <img alt={list.id} src={list.image} />
                        </div>
                        <span>{list.title}</span>
                      </ImgWrap>
                    </div>
                  ))}
              </SuggestList>
              <SuggestTitle>
                <div>Pinterest 에서 인기있는 아이디어</div>
              </SuggestTitle>
              <SuggestList>
                {searchRec &&
                  searchRec.map((list) => (
                    <div key={list.id}>
                      <ImgWrap onClick={() => keywordHandler(list.title)}>
                        <div>
                          <img alt={list.id} src={list.image} />
                        </div>
                        <span>{list.title}</span>
                      </ImgWrap>
                    </div>
                  ))}
              </SuggestList>
            </SuggestionMenu>
            <Tab>
              <NoticeWrap view={noti} onClick={showCart}>
                <button>
                  <span class="material-icons">push_pin</span>
                </button>
              </NoticeWrap>
              <NoticeBox view={noti}>
                <div>
                  <NoticeTitle>
                    <div>추가한 핀</div>
                  </NoticeTitle>
                  <NoticeEnd>
                    <BtnWrap>
                      <DropdownBackward firstBoard={boardArr} />
                    </BtnWrap>
                  </NoticeEnd>
                  <NoticeContents>
                    <NoticeListWrap>
                      <ListWrapper>
                        <ListContent>
                          <img
                            src="https://i.pinimg.com/originals/d5/c9/ef/d5c9ef8928c210b5cf00620d666d8012.jpg"
                            alt="image"
                          />
                        </ListContent>
                      </ListWrapper>
                      <ListWrapper>
                        <ListContent>
                          <img
                            src="https://i.pinimg.com/originals/32/f8/af/32f8afba3b732c37f99d1892dee602f1.jpg"
                            alt="image"
                          />
                        </ListContent>
                      </ListWrapper>
                      <ListWrapper>
                        <ListContent>
                          <img
                            src="https://i.pinimg.com/originals/d5/c9/ef/d5c9ef8928c210b5cf00620d666d8012.jpg"
                            alt="image"
                          />
                        </ListContent>
                      </ListWrapper>
                      <ListWrapper>
                        <ListContent>
                          <img
                            src="https://i.pinimg.com/originals/d5/c9/ef/d5c9ef8928c210b5cf00620d666d8012.jpg"
                            alt="image"
                          />
                        </ListContent>
                      </ListWrapper>
                    </NoticeListWrap>
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
  padding-bottom: 40px;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  /* flex: 1 1 auto; */
  min-height: 0;
`;

const CurrentSearch = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  min-width: 300px;
  height: 48px;
  margin: 0 20px;
  margin-top: 15px;
  background-color: #efefef;
  border-radius: 24px;
  flex: 1 1 auto;
  min-height: 0;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: #2d2d2d;
  font-family: "roboto";
  position: relative;

  div {
    position: absolute;
    top: 15px;
    bottom: 20px;
    left: 20px;
  }
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
    background-color: ${(props) => (props.view ? null : "#efefef")};
  }
  background-color: ${(props) => (props.view ? "#efefef" : null)};

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
    span {
      height: 24px;
      width: 24px;
      color: ${(props) => (props.view ? "#ff1717" : "#ff9191")};
    }
  }
`;

const NoticeBox = styled.div`
  display: ${(props) => (props.view ? "block" : "none")};
  transition: all 0.4s ease-in-out;
  height: calc((100vh - 80px) - 8px);
  width: 360px;
  margin-top: 80px;
  box-shadow: rgba(0, 0, 0, 0.3) -3px 4px 14px 0px;
  overscroll-behavior: none;
  /* overflow: auto; */
  margin-right: 8px;
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 16px;
  background-color: #fff;
  color: #211922;
  font-size: 12px;
`;

// const BottomSection = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #fff;
//   width: 100px;
//   box-shadow: rgba(0, 0, 0, 0.1) 8px -8px 0px 8px;
// `;

const NoticeTitle = styled.div`
  padding: 23px 0;
  z-index: 700;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  border-radius: 16px;

  div {
    font-weight: 700;
    font-size: 16px;
    text-align: center;
  }
`;

const NoticeEnd = styled.div`
  padding: 23px 0;
  border-radius: 16px;
  z-index: 700;
  position: absolute;
  left: 65px;
  bottom: 0;
  width: 100%;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 235px;
  background-color: #fff;
`;
const NoticeContents = styled.div`
  margin: 65px 0;
  padding: 10px 0;
  width: 360px;
  height: calc(100vh - 230px);
  overflow: scroll;
`;

const NoticeListWrap = styled.div`
  width: 95%;
  column-width: 250px;
  column-gap: 0px;
  margin-left: 12px;
  position: relative;
  overflow: hidden;
  clear: both;
`;

const ListWrapper = styled.figure`
  display: inline-block;
  width: 145px;
  float: left;
  margin: 0;
  margin-left: 15px;
  margin-bottom: 16px;
  border-radius: 16px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  /* break-inside: avoid-page; */
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ListContent = styled.div`
  border-radius: 16px;
  width: 100%;
  cursor: zoom-in;
  img {
    width: 100%;
    border-radius: 16px;
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
