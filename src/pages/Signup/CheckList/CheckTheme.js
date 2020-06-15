import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";

const CheckTheme = ({ ThemeList, is }) => {
  const [check, setCheck] = useState([]);
  const [count, setCount] = useState(5);

  const checkBox = (id) => {
    if (!check.includes(id)) {
      setCheck(check.concat(id));
    } else {
      const filtered = check.filter((el) => el !== id);
      setCheck(filtered);
    }
  };

  return (
    <CheckThemeWrap>
      <TitleWrap>
        <h2>회원님의 관심사를 알려주세요!</h2>
        <SubTitle>
          꿀팁: 여기에서 회원님이 선택한 주제로 홈피드가 구성됩니다.
        </SubTitle>
      </TitleWrap>
      <ThemeBox>
        <ThemeWrap>
          {ThemeList &&
            ThemeList.map((list, idx) => (
              <BoxWrapper key={idx} onClick={() => checkBox(list.id)}>
                <ThemeTitleWrape>
                  <ThemeTitle>{list.name}</ThemeTitle>
                </ThemeTitleWrape>
                <SelectWrapper Check={check.includes(list.id)}>
                  <SelectedOverlay></SelectedOverlay>
                </SelectWrapper>
                <Theme styles={list.style}></Theme>
              </BoxWrapper>
            ))}
        </ThemeWrap>
      </ThemeBox>
      <ButtonWrap>
        <div></div>
        {/* <Link style={{ textDecoration: "none" }} to="/"> */}
        <Button active={check.length} onClick={() => is(check)}>
          {check.length >= 5 ? `완료` : `${5 - check.length}개 더 선택`}
        </Button>
        {/* </Link> */}
      </ButtonWrap>
    </CheckThemeWrap>
  );
};

export default CheckTheme;

const CheckThemeWrap = styled.div`
  display: block;
  width: 100%;
  transition-property: opacity;
  transition: all 0.7s ease-in-out;
`;

const TitleWrap = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 32px;
  margin-top: 16px;
  overflow: hidden;

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
  }
`;

const SubTitle = styled.div`
  color: #211922;
  font-size: 16px;
  margin-top: 14px;
`;

const ThemeBox = styled.div`
  padding-bottom: 40px;
  /* margin-left: 32px; */
  margin-right: 32px;
  height: 330px;
  width: 100%;
`;

const ThemeWrap = styled.div`
  margin: 4px;
  padding-left: 14px;
  padding-bottom: 10px;
  height: 360px;
  border-color: none;
  justify-content: left;
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  display: flex;
  overflow-y: scroll;
  flex-wrap: wrap;
  flex: 1 1 auto;
  flex-direction: row;
`;

const BoxWrapper = styled.div`
  display: block;
  position: relative;
  margin: 4px;
  width: 144px;
  height: 144px;
  transform: scale(1);
  &:hover {
    transform: scale(0.97);
    transition: all 0.3s ease-in-out;
  }
`;

const Theme = styled.button`
  border: none;
  height: 144px;
  padding: 0;
  width: 144px;
  cursor: pointer;
  border-radius: 16px;
  background-image: url(${(props) => props.url || null});
  background-repeat: no-repeat;
  background-size: cover;
  background: ${(props) => props.styles};
`;

const ThemeTitleWrape = styled.div`
  position: absolute;
  margin: 10px;
  /* margin-left: 14px; */
  bottom: 0;
  left: 0;
  z-index: 10;
`;
const ThemeTitle = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  z-index: 10;
`;

const SelectWrapper = styled.div`
  display: ${(props) => (props.Check ? "block" : "none")};
`;

const SelectedOverlay = styled.div`
  background-color: #000;
  border-radius: 16px;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0.7;
  z-index: 1;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 20px;
  margin-top: 20px;
  position: relative;
  div {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));
    height: 20px;
    width: 100%;
    margin-top: -10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Button = styled.button`
  min-width: 60px;
  min-height: 48px;
  width: 100%;
  background-color: #efefef;
  padding: 16px 12px;
  border-radius: 24px;
  border: 0;
  margin-top: 40px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  ${(props) =>
    props.active >= 5 &&
    css`
      background-color: #e60023;
      color: #fff;
    `}
`;
