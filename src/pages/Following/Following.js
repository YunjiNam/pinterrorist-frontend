import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../../components/Header";
import ArticleTemplate from "../Main/ArticleTemplate/ArticleTemplate";
import url from "../../config";

const Following = ({ scrollPosition, history, pg }) => {
  const [page, setPage] = useState(0);
  const [ContentsList, setContentsList] = useState([]);
  const [search, setSearch] = useState(false);
  const [pin, setPin] = useState([]);
  const [pinCheck, setPinCheck] = useState(false);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch(`${url}/follows`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setContentsList(res.pins);
        setBoards(res.boards[0]["board"]["name"]);
      });
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
