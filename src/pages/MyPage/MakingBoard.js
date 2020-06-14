import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const MakingBoard = () => {
  return (
    <>
      <Overlay>
        <Modal>
          <Contents>
            <div>
              <h1>보드 만들기</h1>
              <label>이름</label>
              <input
                type="text"
                placeholder="예:'가고 싶은 곳'또는 '조리법'"
              ></input>
              <label>날짜/선택사항-계획을 세우는 데 도움이 됩니다!</label>
              <input type="date" placeholder="시작일 및 종료일 선택"></input>
            </div>
            <Secret>
              <h3>비밀 보드로 유지</h3>
              <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
              </CheckBoxWrapper>
            </Secret>
            <Information>
              따라서 회원님과 참여자만 볼 수 있습니다.
              <span>자세히 알아보기</span>
            </Information>
          </Contents>
          <MakingBt>만들기</MakingBt>
        </Modal>
      </Overlay>
    </>
  );
};

export default MakingBoard;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
  z-index: 999;
`;

const Modal = styled.div`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Contents = styled.div`
  margin: 40px 30px;
  h1 {
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
  }

  input {
    width: 100%;
    margin: 0 5px 30px;
    min-height: 20px;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 16px;

    cursor: text;
    border: ;
  }
`;

const Secret = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  margin-top: 20px;
  h3 {
    font-weight: 600;
    font-size: 20px;
    width: 100%;
  }
`;
const CheckBoxWrapper = styled.div`
  position: relative;
  /* margin-right: 30px; */
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: black;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Information = styled.span`
  font-size: 16px;
  margin-bottom: 50px;
  span {
    font-weight: 600;
  }
`;

const MakingBt = styled.button`
  display: block;
  /* justify-content: flex-end; */

  margin-left: 370px;
  margin-bottom: 50px;
  padding: 12px 16px;
  border: none;
  border-radius: 24px;
  min-height: 48px;
  background-color: #efefef;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #767676;
`;
