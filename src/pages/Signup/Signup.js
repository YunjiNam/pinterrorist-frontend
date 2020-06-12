import React, { useState, useEffect } from "react";
// import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Check from "./CheckList/Check";
import CheckTheme from "./CheckList/CheckTheme";

// const list = {
//   0: <Check />,
//   1: <CheckTheme />,
// };

const Signup = () => {
  const [listNum, setListNum] = useState(0);
  const [checkT, setCheckT] = useState(false);
  const [themeList, setThemeList] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // console.log("OK");
    fetch("http://10.58.0.207:8000/introtopic")
      .then((res) => res.json())
      // .then((res) => console.log(res.topic_list));
      .then((res) => setThemeList(res.topic_list));
  }, []);

  const onClickGo = () => {
    setListNum(1);
    setCheckT(true);
  };
  const isOpenHandler = () => {
    setIsOpen(false);
  };
  console.log(listNum);
  return (
    <>
      {isOpen ? (
        <>
          <SignupOverlay />
          <SignupBox check={checkT}>
            {listNum === 0 ? (
              <Check onClick={onClickGo} goNext={onClickGo} />
            ) : (
              <CheckTheme is={isOpenHandler} ThemeList={themeList} />
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
