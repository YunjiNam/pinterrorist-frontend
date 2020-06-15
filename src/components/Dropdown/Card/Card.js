import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Card = () => {
  const [enterBoard, setEnterBoard] = useState(false);

  const boardEnter = () => {
    setEnterBoard(true);
  };

  const boardLeave = () => {
    setEnterBoard(false);
  };
  return (
    <BoardContentContainer onMouseEnter={boardEnter} onMouseLeave={boardLeave}>
      <BoardContentWrap>
        <BoardContent>
          <BoardImage></BoardImage>
          <BoardTitle>남성 캐주얼 스타일</BoardTitle>
        </BoardContent>
        <BoardSave enterBoard={enterBoard}>저장</BoardSave>
      </BoardContentWrap>
    </BoardContentContainer>
  );
};

export default Card;

const BoardContentContainer = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoardContentWrap = styled.div`
  width: 100%;
  height: 52px;
  margin: 4px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  &:hover {
    background-color: #dfe4ea;
  }
`;

const BoardContent = styled.div`
  display: flex;
  align-items: center;
`;

const BoardImage = styled.div`
  width: 36px;
  height: 36px;
  margin: 4px 12px 4px 8px;
  background-color: #efefef;
  border-radius: 4px;
`;

const BoardTitle = styled.div`
  margin-left: 4px;
  padding: 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 700;
`;

const BoardSave = styled.div`
  margin-right: 10px;
  padding: 11px 15px;
  border-radius: 20px;
  color: white;
  background-color: #e60023;
  font-size: 16px;
  display: ${(props) => (props.enterBoard ? "block" : "none")};
`;
