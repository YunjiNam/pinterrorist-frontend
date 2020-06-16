import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import url from "../../config";

const Topics = () => {
  const [datas, setDatas] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    fetch(`${url}/introtopic`)
      .then((res) => res.json())
      .then((res) => setDatas(res.topics));
  });

  const handleClick = (id) => {
    if (followingList.some((el) => el === id)) {
      let index = followingList.indexOf(id);
      followingList.splice(index, 1);
      setFollowingList(followingList);
      // setFollow(false);
    } else {
      setFollowingList(followingList.concat(id));

      // setFollow(true);
    }
    setKey(id);
    console.log(key);
  };

  return (
    <div>
      <TopicBoxes>
        {datas &&
          datas.map((data) => (
            <SelectedContent key={data.id}>
              <ImageBoxWrap>
                <ImageBox>
                  <ImageWrap styles={data.style} />
                </ImageBox>
                <Title>{data.name}</Title>
                <Follow
                  onClick={() => handleClick(data.id)}
                  followingList={followingList}
                  key={data.id}
                  color={followingList.includes(data.id) ? true : false}
                >
                  <div>
                    {followingList.includes(data.id) ? "팔로우" : "팔로잉"}
                  </div>
                </Follow>
              </ImageBoxWrap>
            </SelectedContent>
          ))}
      </TopicBoxes>
    </div>
  );
};

export default Topics;

const TopicBoxes = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

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
  z-index: 9;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Follow = styled.button`
  text-align: center;
  min-width: 60px;
  min-height: 40px;
  width: 100%;
  color: ${(props) => (props.color ? "#efefef" : "#000")};
  background-color: ${(props) => (props.color ? "#000" : "#efefef")};

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
