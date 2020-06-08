import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Topics = () => {
  const [datas, setDatas] = useState([]);
  const [followStatus, setFollowStatus] = useState("팔로잉");
  const [followingList, setFollowingList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(false);

  useEffect(() => {
    fetch("http://10.58.0.207:8000/introtopic")
      .then((res) => res.json())
      .then((res) => setDatas(res.topic_list));
  });

  // useEffect(() => {
  //   const getData = axios.get("http://10.58.0.207:8000/introtopic");
  //   console.log(getData);
  //   //setDatas(getData.topic_list);
  // }, []);

  const handleClick = (id) => {
    if (followingList.some((el) => el === id)) {
      let index = followingList.indexOf(id);
      followingList.splice(index, 1);
      setFollowingList(followingList);
      setFollowStatus("팔로우");
    } else {
      setFollowingList(followingList.concat(id));
      setFollowStatus("팔로잉");
    }
  };

  return (
    <div>
      {datas.map((data) => (
        <SelectedContent key={data.id}>
          <ImageBoxWrap>
            <ImageBox>
              <ImageWrap styles={data.style} />
            </ImageBox>
            <Title>{data.name}</Title>
            <Follow onClick={() => handleClick(data.id)}>
              <div>{followingList.includes(data.id) ? "팔로우" : "팔로잉"}</div>
            </Follow>
          </ImageBoxWrap>
        </SelectedContent>
      ))}
    </div>
  );
};

export default Topics;

const SelectedContent = styled(Link)`
  text-decoration: none;
  display: flex;
  display : inline-block;
  flex-wrap : wrap
  width: 212px;
  cursor : pointer;
  &:hover{
    filter: brightness(80%);
      }

`;

const ImageBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 12px;
  justify-content: center;
  align-content: center;
  position: relative;
`;

const ImageBox = styled.div`
  display: flex;
  height: 212px;
  width: 212px;
`;
const ImageWrap = styled.div`
  border: none;
  border-radius: 15px;
  width: 100%;
  background: ${(props) => props.styles};
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(50%);
`;
const Title = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  position: absolute;
  z-index: 99;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Follow = styled.button`
  text-align: center;
  min-width: 60px;
  min-height: 40px;
  width: 100%;
  background-color: #efefef;
  padding: 10px 12px;
  border: none;
  border-radius: 24px;
  margin: 8px auto;
  &:hover {
    filter: brightness(70%);
  }
  div {
    font-weight: 600;
  }
`;
