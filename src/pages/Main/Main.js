import React, { useState, useEffect } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../../components/Header";
import Signup from "../Signup/Signup";
import ArticleTemplate from "./ArticleTemplate/ArticleTemplate";
import { connect } from "react-redux";
import url from "./../../config";

const Main = ({ scrollPosition, cartList }) => {
  const [page, setPage] = useState(0);
  const [ContentsList, setContentsList] = useState([]);
  const [search, setSearch] = useState(false);
  const [pin, setPin] = useState([]);
  const [pinCheck, setPinCheck] = useState(false);
  const [boards, setBoards] = useState([]);

  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      fetch(`${url}`, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setContentsList(res.pins);
          console.log(res);
          if (res.boards.length !== 0) {
            setBoards(res.boards[0]["name"]);
          }
        });
    } else {
      fetch("http://localhost:3000/data/main.json")
        .then((res) => res.json())
        .then((res) => setContentsList(res.data));
    }
  }, []);

  const searchHandler = (text) => {
    setSearch(true);
    fetch(`${url}/search/?search=${text}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => setContentsList(res.search_term));
  };

  const pinSave = (id) => {
    if (pin.includes(id)) {
      const filter = pin.filter((i) => i !== id);
      setPin(filter);
      setPinCheck(!pinCheck);
    } else {
      setPinCheck(!pinCheck);
      setPin(pin.concat(id));
    }
  };

  const goDetail = (id) => {
    history.push(`/detail/${id}`);
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
              <>
                <ArticleTemplate
                  boardList={boards}
                  onClick={() => goDetail(list.id)}
                  pinClickHandler={pinSave}
                  pinCheck={pin}
                  key={idx}
                  id={list.id}
                  image={list.image}
                  image_url={list.image_url}
                  search={search}
                />
              </>
            ))}
        </ContentsWrap>
      </MainContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartList: state.cartList,
  };
};

export default connect(mapStateToProps)(Main);

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
  position: relative;
  overflow: hidden;
  clear: both;
`;
