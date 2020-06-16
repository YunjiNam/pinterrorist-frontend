import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import url from "../../../config";

const Boards = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("Authorization");

    fetch(`${url}/boards`, {
      headers: {
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((res) => setBoards(res.boards));
  });
  return (
    <>
      <BoardMainBody>
        {boards &&
          boards.map((data) => (
            <BoardBoxes>
              <ImageBoardWrap key={data.board.id}>
                <ImageWrapper>
                  <EachImage>
                    {data.pins[0] ? (
                      <img alt="myPins" src={data.pins[0]} />
                    ) : (
                      <div />
                    )}
                  </EachImage>
                  <EachImage>
                    {data.pins[1] ? (
                      <img alt="myPins" src={data.pins[1]} />
                    ) : (
                      <div />
                    )}
                  </EachImage>
                  <EachImage>
                    {data.pins[2] ? (
                      <img alt="myPins" src={data.pins[2]} />
                    ) : (
                      <div />
                    )}
                  </EachImage>
                </ImageWrapper>
                <BoardTitle>
                  {data.board.name}
                  <div>핀 {data.pins.length}개</div>
                </BoardTitle>
              </ImageBoardWrap>
            </BoardBoxes>
          ))}
      </BoardMainBody>
    </>
  );
};

export default Boards;

const BoardMainBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BoardBoxes = styled.div`
  max-width: 350px;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  border: 3px solid red;
  border-radius: 8px;
  /* overflow: hidden; */
  margin: 20px 25px;

  &:hover {
    opacity: 2;
  }
`;

const ImageBoardWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid black; */
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  /* display: flex;
  justify-content: center;
  align-content: center; */
`;

const EachImage = styled.div`
  /* display: flex;
  width: 100%;
  height: 200px;

  margin: 0; */
  border-radius: 8px;
  img {
    width: 98.6667px;
    height: 200px;
    border-radius: 8px;
  }

  div {
    background-color: #efefef;
    width: 98.6667px;
    height: 200px;
    border-radius: 8px;
  }
`;

const BoardTitle = styled.div`
  height: 100%;
  font-size: 20px;
  font-weight: 600;
  /* //margin: 5px 20px 0; */

  div {
    font-size: 14px;
    font-weight: 400;
  }
`;
