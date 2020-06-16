import React, { useState, useEffect } from "react";
// import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Check from "./CheckList/Check";
import CheckTheme from "./CheckList/CheckTheme";
import url from "./../../config";

const Signup = () => {
  const [listNum, setListNum] = useState(0);
  const [checkT, setCheckT] = useState(false);
  const [themeList, setThemeList] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const token = localStorage.getItem("Authorization");

  // 뒷부분 스크롤 막음
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  // topic list 받아오기
  const onClickGo = () => {
    fetch(`${url}/introtopic`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      // .then((res) => console.log(res.topics));
      .then((res) => setThemeList(res.topics));
    setListNum(1);
    setCheckT(true);
  };

  // 사용자가 고른 topic list 보내주고 main 으로 이동
  const isOpenHandler = (checked) => {
    // console.log("checked", checked);
    const token = localStorage.getItem("Authorization");
    fetch(`${url}/introtopic`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        chosen_topics: checked,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setIsOpen(false);
        window.location.reload();
      } else {
        alert("try again");
      }
    });
  };

  // console.log(listNum);

  return (
    <>
      {isOpen ? (
        <>
          <SignupOverlay />
          <SignupBox check={checkT}>
            {listNum === 0 ? (
              <Check goNext={onClickGo} />
            ) : (
              <CheckTheme
                is={(checked) => isOpenHandler(checked)}
                ThemeList={themeList}
              />
            )}
          </SignupBox>
        </>
      ) : null}
    </>
  );
};

export default Signup;

const SignupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 700;
  background-color: rgba(0, 0, 0, 0.3);
  overscroll-behavior: none;
`;

const SignupBox = styled.div`
  min-height: 400px;
  padding: 20px 10px 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  text-align: center;
  width: 484px;
  margin: auto;
  z-index: 800;
  /* min-height: 450px; */
  overscroll-behavior: none;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 2px 10px;

  ${(props) =>
    props.check &&
    css`
      border-radius: 32px;
      height: 610px;
      width: 816px;
      transition: width 0.5s ease 0s, height 0.5s ease 0s;
    `}
`;
