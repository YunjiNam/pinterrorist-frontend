import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../../components/Header";
import Signup from "../Signup/Signup";
// import Signup from "../Signup/Signup";

const Main = () => {
  const [page, setPage] = useState(0);
  const [ContentsList, setContentsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/mainList.json")
      .then((res) => res.json())
      // .then((res) => console.log(res.data));
      .then((res) => setContentsList(res.data));
  }, []);
  return (
    <>
      <Header />
      {localStorage.getItem("token") ? null : <Signup />}
      <MainContainer>
        <ContentsWrap>
          {ContentsList &&
            ContentsList.map((list, idx) => (
              <Contents>
                <ImgWrap>
                  <img />
                </ImgWrap>
                <TextWrap></TextWrap>
              </Contents>
            ))}
        </ContentsWrap>
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  padding-top: 80px;
  display: block;
`;

const ContentsWrap = styled.div`
  width: 100%;
  position: relative;
`;

const Contents = styled.div`
  top: 0px;
  left: 0px;
  transform: translateX(0px) translateY(0px);
  width: 252px;
  position: absolute;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 16px;
`;

const ImgWrap = styled.div`
  border-radius: 16px;
  cursor: zoom-in;
`;

const Img = styled.img``;

const TextWrap = styled.div``;
