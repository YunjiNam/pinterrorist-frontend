import React from "react";
import styled, { css } from "styled-components";
import GoogleLogin from "react-google-login";

const Check = ({ onClick, goNext }) => {
  return (
    <SignupWrap>
      <LogoWrap>
        <svg viewBox="-3 -3 82 82">
          <circle />
          <path />
        </svg>
      </LogoWrap>
      <TitleWrap>
        <h3>
          Pinterest에 오신 것을
          <br /> 환영합니다
        </h3>
      </TitleWrap>
      <ButtonWrap>
        <button onClick={onClick}>Google로 계속하기</button>
        <GoogleLogin
          clientId="578598922898-c7jnnn5j6r4phjad623ovcipptruuqnd.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Google로 계속하기
            </button>
          )}
          onSuccess={
            ((result) => localStorage.setItem("token", result.accessToken),
            goNext)
            //   (result) => onLoginGoogle(result)
          }
          onFailure={(result) => console.log(result)}
          cookiePolicy={"single_host_origin"}
        />
        <PolicyWrap>
          <span>
            계속하면 Pinterest 서비스 약관 및 개인정보 보호정책에 동의하는
            것으로 간주됩니다.
          </span>
        </PolicyWrap>
        {/* <LoginWrap>
        <SectionLine />
        <LoginBtn>이미 회원이신가요? 로그인하기</LoginBtn>
      </LoginWrap> */}
      </ButtonWrap>
    </SignupWrap>
  );
};

export default Check;

const SignupWrap = styled.div`
  display: block;
`;

const LogoWrap = styled.div`
  display: block;
  height: 45px;
  margin: 0 auto;
  width: 45px;

  svg {
    width: 48;
    height: 48;

    circle {
      cx: 38;
      cy: 38;
      fill: white;
      r: 40;
    }

    path {
      d: path(
        "M 27.5 71 c 3.3 1 6.7 1.6 10.3 1.6 C 57 72.6 72.6 57 72.6 37.8 C 72.6 18.6 57 3 37.8 3 C 18.6 3 3 18.6 3 37.8 c 0 14.8 9.3 27.5 22.4 32.5 c -0.3 -2.7 -0.6 -7.2 0 -10.3 l 4 -17.2 s -1 -2 -1 -5.2 c 0 -4.8 3 -8.4 6.4 -8.4 c 3 0 4.4 2.2 4.4 5 c 0 3 -2 7.3 -3 11.4 C 35.6 49 38 52 41.5 52 c 6.2 0 11 -6.6 11 -16 c 0 -8.3 -6 -14 -14.6 -14 c -9.8 0 -15.6 7.3 -15.6 15 c 0 3 1 6 2.6 8 c 0.3 0.2 0.3 0.5 0.2 1 l -1 3.8 c 0 0.6 -0.4 0.8 -1 0.4 c -4.4 -2 -7 -8.3 -7 -13.4 c 0 -11 7.8 -21 22.8 -21 c 12 0 21.3 8.6 21.3 20 c 0 12 -7.4 21.6 -18 21.6 c -3.4 0 -6.7 -1.8 -7.8 -4 L 32 61.7 c -0.8 3 -3 7 -4.5 9.4 Z"
      );
      fill: rgb(230, 0, 35);
      fill-rule: evenodd;
    }
  }
`;

const TitleWrap = styled.div`
  margin: 0px auto;
  padding-top: 40px;
  padding-bottom: 30px;
  width: 400px;

  h3 {
    color: rgb(51, 51, 51);
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -1.2px;
    line-height: 1.3;
  }
`;

const ButtonWrap = styled.div`
  margin: 0px auto;
  width: 268px;
  padding-top: 20px;
  padding-bottom: 20px;

  button {
    border: 0px;
    height: 40px;
    display: block;
    border-radius: 20px;
    -webkit-font-smoothing: antialiased;
    padding: 1px;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    margin-top: 0px;
    text-align: center;
    margin-right: 0px;
    transition: opacity 0.2s linear 0s;
    position: relative;
    width: 100%;
    background-color: rgb(239, 239, 239);
    &:hover {
      background-color: #e60023;
      color: #fff;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const PolicyWrap = styled.div`
  margin-top: 16px;

  span {
    font-size: 11px;
    font-weight: normal;
    text-align: center;
    transition: opacity 0.2s linear 0s;
    color: rgb(118, 118, 118);
    width: 224px;
  }
`;

// const LoginWrap = styled.div`
//   margin: 0px auto;
//   text-align: center;
// `;

// const SectionLine = styled.div`
//   border-bottom: 1px solid rgb(239, 239, 239);
//   margin: 20px 0px 15px -68px;
//   width: 404px;
// `;

// const LoginBtn = styled.a`
//   color: rgb(51, 51, 51);
//   cursor: pointer;
//   font-size: 12px;
//   font-weight: 700;
// `;
