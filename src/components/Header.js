import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Header = () => {
  const [active, setActive] = useState(false);
  const searchActive = () => {
    setActive(!active);
  };
  return (
    <Headers>
      <HeaderContent>
        <HeaderWrap>
          <Logo>
            <Link to="/">
              <svg viewBox="0 0 24 24">
                <circle />
                <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" />
              </svg>
            </Link>
          </Logo>
          <Home>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>홈</span>
            </Link>
          </Home>
          <Following>
            <Link to="/" style={{ textDecoration: "none" }}>
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
                <input type="text" placeholder="검색" />
              </InputWrap>
            </SearchWrap>
          </Search>
          <Tab>
            <NoticeWrap>
              <button>
                <svg viewBox="0 0 24 24">
                  <path />
                </svg>
              </button>
            </NoticeWrap>
            <MessageWrap>
              <button>
                <svg viewBox="0 0 24 24">
                  <path />
                </svg>
              </button>
            </MessageWrap>
            <ProfileWrap>
              <button>
                <svg viewBox="0 -8 24 30">
                  <path />
                </svg>
              </button>
            </ProfileWrap>
            <DropWrap>
              <button>
                <svg viewBox="0 0 24 24">
                  <path />
                </svg>
              </button>
            </DropWrap>
          </Tab>
        </HeaderWrap>
      </HeaderContent>
    </Headers>
  );
};

export default Header;

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
  background-color: #111;
  border-radius: 24px;
  cursor: pointer;
  /* &:hover {
    background-color: #efefef;
  } */
  span {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: #fff;
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
  &:hover {
    background-color: #efefef;
  }
  span {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: #333;
    padding: 0px 16px;
  }
`;

const Search = styled.div`
  min-width: 407px;
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
      color: #767676;
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
      height: 24px;
      width: 24px;
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
      color: #767676;
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
