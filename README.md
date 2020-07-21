# 2차 Project - Pinterest.com 웹사이트 클론
## Intro
- WECODE 8기 수강생들의 2차 팀 프로젝트.
- Back-end 1명, Front-end 3명 총 4명의 팀원으로 구성
- 프로젝트 기간은 2주( 2020.06.08- 06.19 )
## Demo
https://youtu.be/3i2QFbZcVYE
https://www.youtube.com/watch?v=axZ_IJpYmWQ&feature=youtu.be
## Stack and Tools
- React.js
- Styled-components
- CRA
- Redux
- Hooks
- Google Social Login API
- Postman
- Git / Github
- Slack
- Trello
## Goal
- 최대한 기존 웹사이트와 동일한 UI/기능 구현
- Back-end API 통신(Get, Post(FormData), Delete)
- 기존 웹사이트에는 없지만 Redux를 활용할 수 있는 다중 핀 카트에 담기 기능 추가
- Deily StandUp Meeting and 1 Week Sprint
- React 컴포넌트 재사용 and Style Component 사용
## Description
### Login&SignUp
- 모달로 구현 스텝별로 안의 콘텐츠가 바뀜 (로그인 -> 관심사 선택)
- Google Social Login API 사용
- 회원가입 관심사 선택 기능 (관심사를 선택해서 서버에 저장 메인 피드에 반영됨)
### MainPage
- 핀터레스트 레이아웃 (masonry layout)로 구현
- 회원가입 시 선택한 관심사를 반영 메인 화면에서 관심사에 맞는 pin들만 보여줌
- 메인/메인 디테일에서 각각 보드선택/보드만들기/핀 저장 가능
- 팔로잉 하는 사람들의 pin 만 보는 기능
### 네비게이션 바 (검색, 장바구니, 탭 이동)
- 검색 바에서 관심사 검색 기능
- 장바구니에 핀 다중 담기 기능 (기존에 없는 기능인데 Redux를 사용하여 추가한 기능)
- 메인, 팔로잉, 마이페이지 이동
- 로그아웃 (로컬 스토리지 비우고 로그인으로 이동)
### MainDetail
- 메인 디테일 페이지에서 댓글올리기/삭제/좋아요 기능
- 해당 이미지를 가지고 보드 만들기 기능
- 메인 디테일 페이지 하단에서 유사 Pin 들을 함께 보여주는 기능
### MyPage
- 보드 만들기/삭제 기능
- Pin 업로드(이미지 미리보기) 기능
- 저장한 pin을 전체/보드별로 보기 기능
- 주제 팔로우/팔로우 취소 기능
