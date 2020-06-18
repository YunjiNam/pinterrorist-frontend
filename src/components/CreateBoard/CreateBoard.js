import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import detailMock from "../../images/detailMock.jpg";
import url from "../../config";

const CreateBoard = ({
  modal,
  setModal,
  image,
  paramsId,
  setFoldDropdown,
  foldDropdown,
  setSelected,
  selected,
  clickDropdown,
  setClickDropdown,
  selectedTitle,
  setSelectedTitle,
  disabled,
  setDisabled,
}) => {
  const [privacy, setPrivacy] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");
  const [buttonColor, setButtonColor] = useState(false);

  const handlePrivate = () => {
    setPrivacy(!privacy);
    console.log(privacy);
  };

  const handleCancel = () => {
    setCancel(!cancel);
    setModal(false);
    console.log(cancel);
    console.log(paramsId);
  };

  const handleCreate = () => {
    if (boardTitle.length > 0) {
      console.log("Post 실행");
      const token = localStorage.getItem("Authorization");
      fetch(`${url}/pin/${paramsId}`, {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          chosen_board: boardTitle,
        }),
      }).then((res) => {
        if (res.status === 200) {
          setModal(false);
          setFoldDropdown(false);
          setSelected(true);
          setClickDropdown(true);
          setSelectedTitle(boardTitle);
          setDisabled(true);
        } else {
          alert("Failed to save");
        }
      });
    }
  };

  const handleChange = (e) => {
    setBoardTitle(e.target.value);
    setButtonColor(e.target.value.length > 0 ? true : false);
  };

  return (
    <BoardModal cancel={cancel}>
      <Overlay onClick={handleCancel}></Overlay>
      <Modal>
        <TitleWrap>
          <div>
            <h1>보드 만들기</h1>
          </div>
        </TitleWrap>
        <MainWrap>
          <MainLeft>
            <div>
              <img src={image} />
            </div>
          </MainLeft>
          <MainRight>
            <BoardTitle>
              <h3>이름</h3>
              <input
                type="text"
                placeholder="예: '가고 싶은 곳' 또는 '조리법'"
                onChange={handleChange}
              />
            </BoardTitle>
            <BoardDate>
              <h3>날짜 추가(선택사항—계획에 유용할 수 있음)</h3>
              <input type="date" required />
            </BoardDate>
            <BoardPrivate>
              <h3 onClick={handlePrivate}>비밀 설정</h3>
              <CheckboxWrap privacy={privacy} onClick={handlePrivate}>
                <Checkbox></Checkbox>
                <CheckInner privacy={privacy}></CheckInner>
              </CheckboxWrap>
            </BoardPrivate>
            <BoardOption>
              <h3>참여자 추가(선택 사항)</h3>
              <SearchOption>
                <input type="text" placeholder="이름 또는 이메일 검색" />
                <i class="fas fa-search"></i>
              </SearchOption>
            </BoardOption>
          </MainRight>
        </MainWrap>
        <FooterWrap>
          <ButtonCancel onClick={handleCancel}>취소</ButtonCancel>
          <ButtonCreate onClick={handleCreate} buttonColor={buttonColor}>
            만들기
          </ButtonCreate>
        </FooterWrap>
      </Modal>
    </BoardModal>
  );
};

export default withRouter(CreateBoard);

const BoardModal = styled.div`
  display: ${(props) => (props.cancel ? "none" : "display")};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 900;
  cursor: zoom-out;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: 0 16px;
  transform: translate(-50%, -50%);
  width: 720px;
  border-radius: 32px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 990;
`;

const TitleWrap = styled.div`
  div {
    width: 100%;
    h1 {
      display: flex;
      justify-content: center;
      padding: 32px;
      font-size: 28px;
      font-weight: bold;
    }
  }
`;

const MainWrap = styled.div`
  height: 650px;
  width: 100%;
  display: flex;
`;

const MainLeft = styled.div`
  width: 40%;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  div {
    width: 240px;
    border-radius: 16px;
    img {
      width: 100%;
      border-radius: 16px;
    }
  }
`;

const MainRight = styled.div`
  width: 60%;
`;

const BoardTitle = styled.div`
  padding: 15px;
  h3 {
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
  input {
    height: 48px;
    padding: 8px 16px;
    width: 100%;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 16px;
    &::placeholder {
      color: black;
    }
  }
`;

const BoardDate = styled.div`
  padding: 15px;
  h3 {
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
  input {
    height: 48px;
    padding: 8px 16px;
    width: 100%;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 16px;
  }
`;

const BoardPrivate = styled.div`
  padding: 15px;
  h3 {
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
`;

const BoardOption = styled.div`
  padding: 15px;
  h3 {
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
`;

const CheckboxWrap = styled.div`
  position: relative;
  border: 1px solid #767676;
  border-radius: 48px;
  height: 24px;
  width: 40px;
  background-color: ${(props) => props.privacy && "#111"};
  transition: background-color 0.3s;
`;

const Checkbox = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  border: 0;
`;

const CheckInner = styled.div`
  position: absolute;
  border: 1px solid #767676;
  height: 24px;
  width: 24px;
  margin: -1px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  right: ${(props) => props.privacy && 0};
`;

const SearchOption = styled.div`
  width: 100%;
  position: relative;
  input {
    width: 100%;
    height: 48px;
    border: 2px solid #ddd;
    border-radius: 999px;
    padding: 8px 40px;
    margin: 20px 0;
    font-size: 16px;
    &::placeholder {
      color: black;
    }
  }
  i {
    position: absolute;
    left: 20px;
    top: 37px;
  }
`;

const FooterWrap = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  width: 720px;
  bottom: 0;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
`;

const ButtonCancel = styled.button`
  width: 60px;
  height: 40px;
  display: inline-block;
  cursor: pointer;
  background-color: #efefef;
  padding: 8px 12px;
  border: 0;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 700;
`;

const ButtonCreate = styled(ButtonCancel)`
  width: 66px;
  color: ${(props) => (props.buttonColor ? "#FFFFFF" : "#767676")};
  background-color: ${(props) => (props.buttonColor ? "#e60023" : "#efefef")};
`;
