import React from "react";
import styled, { css } from "styled-components";

const Header = () => {
  return (
    <Headers>
      <HeaderContent>
        <HeaderWrap>
          <Logo></Logo>
          <Home></Home>
          <Following></Following>
          <Search></Search>
          <Tab></Tab>
        </HeaderWrap>
      </HeaderContent>
    </Headers>
  );
};

export default Header;

const Headers = styled.div`
  z-index: 671;
  position: fixed;
  top: 0;
  width: 100%;
  display: block;
`;

const HeaderContent = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding: 16px 4px;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
`;

const HeaderWrap = styled.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
