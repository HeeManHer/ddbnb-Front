/* 추가 설치해야 하는 패키지 목록
  react-router-dom
  redux
  react-redux
  redux-actions
  redux-thunk
  redux-logger
  redux-devtools-extension
*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AdminLayout from "./layout/AdminLayout"

import LoginPage from "./page/main/LoginPage";
import MainPage from "./page/main/MainPage";

import PetMomList from "./page/list/PetMomList";
import PetMomRecruit from "./page/write/PetMomRecruit";
import PetMomRecruitDatail from "./page/write/PetMomRecruitDatail";
import PetMomModify from "./page/write/PetMomModify";


import PetSitterList from "./page/list/PetSitterList";
import PetSitterRecruit from "./page/write/PetSitterRecruit";
import PetSitterRecruitDatail from "./page/write/PetSitterRecruitDatail";
import PetSitterModify from "./page/write/PetSitterModify";

import AboutPage from "./page/main/AboutPage";
import MyPageMain from "./page/mypage/MyPageMain";

import ReviewPage from "./page/review/ReviewPage";
import MyReviewPage from "./page/review/MyReviewPage";

import Dashboard from "./page/admin/Dashboard";
import Member from "./page/admin/Member";
import BoardManage from "./page/admin/BoardManage";
import ReportManage from "./page/admin/ReportManage";

import PostMessage from "./component/modal/pm/PostMessage";
import SendMessage from "./component/modal/pm/SendMessage";
import ApplicantsList from "./component/modal/apply/ApplicantsList";
import Calendar from "./component/item/Calendar";
import PostMessageList from "./page/list/PostMessageList";
import KakaoPage from "./page/main/KakaoPage";
import NaverPage from "./page/main/NaverPage";

import LoginProfilePage from "./page/profile/LoginProfilePage";
import ReviceProfilePage from "./page/profile/ReviseProfilePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/kakao/callback" element={<KakaoPage />} />
          <Route path="/login/oauth2/code/naver" element={<NaverPage />} />
          <Route path="/loginprofile" element={<LoginProfilePage />} />
          <Route path="/reviseprofile" element={<ReviceProfilePage />} />

          <Route path="petMom" >
            <Route index element={<PetMomList />} />
            <Route path="recruit" element={<PetMomRecruit />} />\
            <Route path=":boardId" element={<PetMomRecruitDatail />} />
            <Route path=":boardId/modify" element={<PetMomModify />} />

          </Route>

          <Route path="petSitter" >
            <Route index element={<PetSitterList />} />
            <Route path="recruit" element={<PetSitterRecruit />} />\
            <Route path=":boardId" element={<PetSitterRecruitDatail />} />
            <Route path=":boardId/modify" element={<PetSitterModify />} />
          </Route>

          <Route path="about" element={<AboutPage />} />
          <Route path="reviews">
            <Route path=':reviewId' element={<ReviewPage />} />
          </Route>

          <Route path="myReview" element={<MyReviewPage />} />

          <Route path="mypage/:memberId" element={<MyPageMain />} />
          {/* <Route path="userProfile">
            <Route path=":userNo" element={<UserProfile />} />
          </Route> */}

        </Route>

        <Route path="manage" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="member" element={<Member />} />
          <Route path="board" element={<BoardManage />} />
          <Route path="report" element={<ReportManage />} />
        </Route>

        <Route path="applicant" element={<ApplicantsList />} />
        <Route path="postMessageList" element={<PostMessageList />} />
        <Route path="postMessage/:messageId" element={<PostMessage />} />
        <Route path="sendMessage/:memberId" element={<SendMessage />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


