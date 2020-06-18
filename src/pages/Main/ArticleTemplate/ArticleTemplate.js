import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown/Dropdown";
import styled, { css } from "styled-components";

const ArticleTemplate = ({
  //   history,
  id,
  image_url,
  image,
  search,
  pinClickHandler,
  pinCheck,
  onClick,
  boardList,
}) => {
  const [mouse, setMouse] = useState(false);
  const [active, setActive] = useState(null);

  const imageOver = (id) => {
    setMouse(true);
    setActive(id);
  };

  const imageLeave = () => {
    setMouse(false);
    setActive(null);
  };

  const clickHandle = (id) => {
    console.log("check");
    pinClickHandler(id);
  };

  return (
    <Contents
      key={id}
      onMouseOver={() => imageOver(id)}
      onMouseOut={() => imageLeave()}
    >
      <ImgWrap>
        <img src={search ? image_url : image} alt={id} />
      </ImgWrap>
      <ContentsOverlay view={active === id} onClick={onClick} />
      <DropdownWrap view={active === id}>
        <Dropdown image={image} paramsId={id} firstBoard={boardList} />
      </DropdownWrap>
      <Pin
        show={active === id}
        view={pinCheck.includes(id)}
        check={pinCheck.includes(id)}
        onClick={() => clickHandle(id)}
      >
        <button onClick={() => pinClickHandler(id)}>
          <span class="material-icons">push_pin</span>
        </button>
      </Pin>
    </Contents>
  );
};

export default ArticleTemplate;

const Contents = styled.figure`
  display: inline-block;
  width: 230px;
  float: left;
  margin: 0;
  margin-left: 10px;
  margin-bottom: 16px;
  border-radius: 16px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  break-inside: avoid-page;
`;

const ImgWrap = styled.div`
  border-radius: 16px;
  width: 100%;
  cursor: zoom-in;
  img {
    width: 100%;
    height: inherit;
    border-radius: 16px;
  }
`;

// const OverBox = styled.div`
//   cursor: zoom-in;
// `;

const ContentsOverlay = styled.div`
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.view
      ? css`
          opacity: 1
          cursor: pointer;
        `
      : css`
          opacity: 0;
        `}
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const DropdownWrap = styled.div`
  position: absolute;
  top: 10px;
  bottom: 0;
  left: 10px;
  right: 0;
  z-index: 600;
  width: 210px;
  height: 100px;
  ${(props) =>
    props.view
      ? css`
          display: block;
          cursor: pointer;
        `
      : css`
          display: none;
        `}
`;

const Pin = styled.div`
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 500;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.show || props.check
      ? css`
          opacity: 1;
          cursor: pointer;
        `
      : css`
          opacity: 0;
        `}

  button {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    border: none;
    padding: 4px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    outline: none;
    span {
      height: 24px;
      width: 24px;
      color: ${(props) => (props.view ? "#ff1717" : "#ff9191")};
    }
  }
`;
