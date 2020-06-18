import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./../../../components/Header";
import url from "./../../../config";

const PinsFromBoard = ({ history }) => {
  const [boardName, setBoardName] = useState([]);
  const [myPins, setMyPins] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    console.log("실행");
    fetch(`${url}/boards/${id}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setBoardName(res.board.name);
        setMyPins(res.pins);
      });
  }, [id, setBoardName]);

  const goDetail = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <>
      <Header />
      <BoardInfo>
        <BoardTitle>{boardName}</BoardTitle>
        <PictureInfo>
          <img
            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/102641475_286312019085118_4472201422226881902_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=QGlmuy4R8QQAX8tSXHe&oh=14ca5bea3514f34ed8dd9b74fa06a4cb&oe=5F14B3A8"
            alt="bio-photo"
          />
        </PictureInfo>
        <SubjectTab>핀</SubjectTab>
      </BoardInfo>
      <MainContainer>
        <ContentsWrap>
          {myPins &&
            myPins.map((list) => (
              <Contents
                key={list.id}
                onClick={() => {
                  goDetail(list.id);
                }}
              >
                <ImgWrap>
                  <img src={list.image_url} alt={list.id} />
                </ImgWrap>
                <TextWrap></TextWrap>
              </Contents>
            ))}
        </ContentsWrap>
      </MainContainer>
    </>
  );
};

export default withRouter(PinsFromBoard);

const BoardInfo = styled.div`
  margin: 125px auto 0;
  text-align: center;
  font-size: 35px;
  font-weight: 600;
`;

const BoardTitle = styled.h1``;

const PictureInfo = styled.div`
  margin: 20px auto;
  border-radius: 50%;
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;

const SubjectTab = styled.button`
  width: 60px;
  min-height: 48px;
  margin: 10px auto;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  color: white;
  background: black;
  border-radius: 27px;
  outline-style: none;
`;

const MainContainer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  width: 100%;
  display: block;
  display: flex;
  justify-content: center;
`;
const ContentsWrap = styled.div`
  width: 95%;
  column-width: 250px;
  column-gap: 0px;
`;

const Contents = styled.figure`
  display: inline-block;
  width: 230px;
  margin: 0;
  margin-bottom: 16px;
  /* margin-left: 8px;
  margin-right: 8px; */
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ImgWrap = styled.div`
  border-radius: 16px;
  width: 100%;
  cursor: zoom-in;
  img {
    width: 100%;
  }
`;

const TextWrap = styled.div``;
