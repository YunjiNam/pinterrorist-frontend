import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../../components/Header";
import Signup from "../Signup/Signup";
import url from "./../../config";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
// import Signup from "../Signup/Signup";

const Main = ({ scrollPosition, history }) => {
  const [page, setPage] = useState(0);
  const [ContentsList, setContentsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/main.json")
      .then((res) => res.json())
      .then((res) => setContentsList(res.data));
  }, []);

  useEffect(() => {
    fetch(`${url}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => setContentsList(res.pins));
  }, []);

  const searchHandler = (text) => {
    fetch(`${url}/search/?search=${text}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => setContentsList(res.search_term));
    // console.log(text);
  };

  return (
    <>
      <Header search={(text) => searchHandler(text)} />
      {localStorage.getItem("Authorization") ? (
        window.location.reload
      ) : (
        <Signup />
      )}
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

export default withRouter(Main);

const MainContainer = styled.div`
  margin-top: 20px;
  padding-top: 80px;
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
