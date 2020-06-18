import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card/Card";
import CreateBoard from "../../components/CreateBoard/CreateBoard";
import url from "../../config";

const Dropdown = ({ image, paramsId, firstBoard }) => {
  const [clickDropdown, setClickDropdown] = useState(false);
  const [foldDropdown, setFoldDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [boardArr, setBoardArr] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleDropdown = () => {
    const token = localStorage.getItem("Authorization");
    console.log("Get 실행");
    fetch(`${url}/boards`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setBoardArr(res.boards);
        setClickDropdown(!clickDropdown);
        setFoldDropdown(!foldDropdown);
      });
  };

  const handleModal = () => {
    setModal(true);
    setClickDropdown(false);
    console.log("Modal 실행", modal);
  };

  const savePinToFirstBoard = () => {
    const token = localStorage.getItem("Authorization");
    console.log("Post 실행");
    fetch(`${url}/pin/${paramsId}`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        chosen_board: firstBoard,
      }),
    });
  };

  const selectBoard = (title) => {
    setSelectedTitle(title);
    setSelected(true);
    setClickDropdown(true);
    setDisabled(true);
    console.log("셀렉티드 : ", selected);
  };

  return (
    <ButtonWrap>
      {modal ? (
        <CreateBoard
          modal={modal}
          setModal={setModal}
          image={image}
          paramsId={paramsId}
          foldDropdown={foldDropdown}
          setFoldDropdown={setFoldDropdown}
          selected={setSelected}
          setSelected={setSelected}
          clickDropdown={clickDropdown}
          setClickDropdown={setClickDropdown}
          selectedTitle={selectedTitle}
          setSelectedTitle={setSelectedTitle}
          disabled={disabled}
          setDisabled={setDisabled}
        />
      ) : null}
      <DropdownNav
        disabled={disabled ? "disabled" : "enabled"}
        onClick={handleDropdown}
        clickDropdown={clickDropdown}
        disabled={disabled}
      >
        <DropdownLeft>
          <DropdownText>
            {selected ? `${selectedTitle}에 저장됨` : firstBoard}
          </DropdownText>
          <IconArrowWrap>
            <IconArrow>{selected ? "done" : "keyboard_arrow_down"}</IconArrow>
          </IconArrowWrap>
        </DropdownLeft>
      </DropdownNav>
      <ButtonSave clickDropdown={clickDropdown}>
        <ButtonSaveText onClick={savePinToFirstBoard}>저장</ButtonSaveText>
      </ButtonSave>
      <DropdownWrap clickDropdown={clickDropdown} foldDropdown={foldDropdown}>
        <DropdownTop>
          <input type="text" placeholder="검색" />
          <i class="fas fa-search"></i>
        </DropdownTop>
        <DropdownBody>
          <BoardAllTitle>모든 보드</BoardAllTitle>
          {boardArr &&
            boardArr.map((list, idx) => (
              <Card
                boardName={list.board.name}
                pinImage={list.pins}
                paramsId={paramsId}
                setClickDropdown={setClickDropdown}
                clickDropdown={clickDropdown}
                selectBoard={selectBoard}
                setFoldDropdown={setFoldDropdown}
                foldDropdown={foldDropdown}
              />
            ))}
        </DropdownBody>
        <DropdownBottom onClick={handleModal}>
          <BottomIcon>
            <i class="fas fa-plus-circle"></i>
          </BottomIcon>
          <BottomTitle>보드 만들기</BottomTitle>
        </DropdownBottom>
      </DropdownWrap>
    </ButtonWrap>
  );
};

export default Dropdown;

const ButtonWrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const DropdownNav = styled.button`
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: #efefef;
  cursor: pointer;
  position: relative;
  border: none;
  padding: 0;
  height: 44px;
  outline: none;
  width: ${(props) => (props.clickDropdown ? "100%" : "180px")};
  border-top-right-radius: ${(props) =>
    props.clickDropdown ? "12px" : "none"};
  border-bottom-right-radius: ${(props) =>
    props.clickDropdown ? "12px" : "none"};
  &:hover {
    background-color: #dfe4ea;
  }
`;

const DropdownLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 100%;
`;

const DropdownText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #111;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const IconArrowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconArrow = styled.span`
  font-family: "Material Icons";
  font-size: 25px;
`;

const ButtonSave = styled.button`
  width: 60px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 0 16px;
  background-color: #e60023;
  border: none;
  cursor: pointer;
  outline: none;
  display: ${(props) => (props.clickDropdown ? "none" : "display")};
`;

const ButtonSaveText = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

const DropdownWrap = styled.div`
  width: 320px;
  position: absolute;
  left: -40px;
  top: 50px;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: ${(props) => (props.foldDropdown ? "block" : "none")};
`;
const DropdownTop = styled.div`
  padding: 12px;
  width: 100%;
  position: relative;
  input {
    width: 100%;
    height: 48px;
    border: 2px solid #ddd;
    border-radius: 999px;
    padding: 8px 40px;
    font-size: 16px;
    cursor: pointer;
  }
  i {
    position: absolute;
    left: 29px;
    top: 29px;
    cursor: pointer;
  }
`;

const DropdownBody = styled.div`
  height: 322px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const BoardAllTitle = styled.div`
  padding: 4px 12px;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
`;

const DropdownBottom = styled.div`
  height: 52px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  border-top: 1px solid #dfe4ea;
  &:hover {
    background-color: #dfe4ea;
  }
`;

const BottomIcon = styled.div`
  margin: 0 20px 0 16px;
  i {
    font-size: 28px;
    color: #e60023;
  }
`;

const BottomTitle = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
`;
