import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import url from "../../../config";

const Boards = ({ history }) => {
  const [boards, setBoards] = useState([]);
  const [onMouse, setOnMouse] = useState(false);
  const [hoveredBoard, setHoveredBoard] = useState("");
  const [clickedBoardName, setClickedBoardName] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("Authorization");

    fetch(`${url}/boards`, {
      headers: {
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((res) => setBoards(res.boards));
  }, []);

  //마우스호버&아웃시 삭제 버튼 생기는 함수
  const onMouseHandler = (boardId) => {
    setHoveredBoard(boardId);
  };
  //보드 삭제하는 기능
  const deleteBoard = (boardName) => {
    console.log(boardName);
    const accessToken = localStorage.getItem("Authorization");

    fetch(`${url}/boards`, {
      method: "DELETE",
      headers: {
        Authorization: accessToken,
      },
      body: JSON.stringify({
        board_deletion: boardName,
      }),
    }).then(function (res) {
      if (res.ok) {
        alert("보드가 삭제되었습니다.");
        window.location.reload();
        console.log(res);
      } else {
        alert("Oops");
        console.log(res);
      }
    });
  };

  const stateBoardName = (name) => {
    setClickedBoardName(name);
  };

  return (
    <>
      <BoardMainBody>
        {boards &&
          boards.map((data) => (
            <BoardBoxes
              //닉이랑 맞춰봐야함
              // onClick={(props) => {
              //   props.history.push("/data.board.name");
              // }}
              onMouseEnter={() => onMouseHandler(data.board.id)}
              onMouseLeave={() => onMouseHandler("")}
              onClick={() => stateBoardName(data.board.name)}
            >
              <ImageBoardWrap key={data.board.id}>
                <Link to={`/boards/${data.board.name}`}>
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
                </Link>
                <Description>
                  <BoardTitle>
                    {data.board.name}
                    <div>핀 {data.pins.length}개</div>
                  </BoardTitle>
                  {hoveredBoard === data.board.id ? (
                    <button
                      onClick={() => {
                        deleteBoard(data.board.name);
                      }}
                    >
                      보드 삭제
                    </button>
                  ) : null}
                </Description>
              </ImageBoardWrap>
            </BoardBoxes>
          ))}
      </BoardMainBody>
    </>
  );
};

export default withRouter(Boards);

const BoardMainBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BoardBoxes = styled.div`
  max-width: 350px;
  height: 100%;
  /* padding-bottom: 10px; */
  border-radius: 8px;
  margin: 20px 25px 5px;

  &:hover {
    background-color: #f8f8f8;
    opacity: 1;
    z-index: 0;
  }
`;

const ImageBoardWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
`;

const EachImage = styled.div`
  border-radius: 8px;
  img {
    width: 98.6667px;
    height: 200px;
    border-radius: 8px;
    margin: 0 1px;
  }

  div {
    background-color: #efefef;
    width: 98.6667px;
    height: 200px;
    border-radius: 8px;
    margin: 0 1px;
  }
`;

const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;

  div {
    font-size: 14px;
    font-weight: 400;
    margin: 10px 0;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 0 10px;

  button {
    display: flex;
    align-items: center;
    border: none;
    background: #efefef;
    border-radius: 20px;
    max-height: 60px;
    font-size: 12px;

    cursor: pointer;
    /* padding: 10px;
    margin-bottom: 20px; */
  }
`;
