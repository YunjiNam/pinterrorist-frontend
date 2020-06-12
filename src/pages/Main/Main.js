import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../../components/Header";
import Signup from "../Signup/Signup";
// import Signup from "../Signup/Signup";

const Main = () => {
  return (
    <>
      <Header />
      <Signup />
    </>
  );
};

export default Main;
