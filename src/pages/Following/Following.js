import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../../components/Header";
import Signup from "../Signup/Signup";

const Following = ({ scrollPosition, history, pg }) => {
  const [page, setPage] = useState(0);
  const [ContentsList, setContentsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/main.json")
      .then((res) => res.json())

      .then((res) => setContentsList(res.data));
  }, []);
  return (
    <>
      <Header />
      <MainContainer>
        <ContentsWrap>
          {ContentsList &&
            ContentsList.map((list, idx) => (
              // <LazyLoadImage
              //   key={list.id}
              //   alt={list.id}
              //   scrollPosition={scrollPosition}
              //   src={list.image_url}
              //   effect="opacity"
              // />
              <Contents
                key={list.id}
                onClick={() => {
                  history.push("/detail");
                }}
              >
                <ImgWrap>
                  <img src={list.image} alt={list.id} />
                </ImgWrap>
                <TextWrap></TextWrap>
              </Contents>
            ))}
        </ContentsWrap>
      </MainContainer>
    </>
  );
};

export default withRouter(Following);

const MainContainer = styled.div`
  margin-top: 20px;
  padding-top: 80px;
  width: 100%;
  display: block;
  display: flex;
  justify-content: center;
`;

const ContentsWrap = styled.div`
  width: 90%;
  column-width: 252px;
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
