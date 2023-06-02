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

import PetSitterList from "./page/list/PetSitterList";
import PetSitterRecruit from "./page/write/PetSitterRecruit";
import PetSitterRecruitDatail from "./page/write/PetSitterRecruitDatail";

import AboutPage from "./page/main/AboutPage";
import MyPageMain from "./page/mypage/MyPageMain";
import UserProfile from "./page/mypage/UserProfile";

import AllReviewPage from "./page/review/AllReviewPage";
import MyReviewPage from "./page/review/MyReviewPage";

import Dashboard from "./page/admin/Dashboard";
import Member from "./page/admin/Member";
import PetMomManage from "./page/admin/PetMomManage";
import PetSitterManage from "./page/admin/PetSitterManage";
import ReportMember from "./page/admin/ReportMember";
import ReportPost from "./page/admin/ReportPost";
import PostMessage from "./component/modal/pm/PostMessage";
import SendMessage from "./component/modal/pm/SendMessage";
import ApplicantsList from "./component/modal/apply/ApplicantsList";
import Calendar from "./component/item/Calendar";
import PostMessageList from "./page/list/PostMessageList";
import Temp from "./page/admin/Temp";



function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="petMom" >
            <Route index element={<PetMomList />} />
            <Route path="recruit" element={<PetMomRecruit />} />\
            <Route path=":petMomNo" element={<PetMomRecruitDatail />} />
          </Route>

          <Route path="petSitter" >
            <Route index element={<PetSitterList />} />
            <Route path="recruit" element={<PetSitterRecruit />} />\
            <Route path=":petSitterNo" element={<PetSitterRecruitDatail />} />
          </Route>

          <Route path="about" element={<AboutPage />} />

          <Route path="myReview" element={<MyReviewPage />} />
          <Route path="AllReview" element={<AllReviewPage />} />

          <Route path="mypage" element={<MyPageMain />} />
          <Route path="userProfile">
            <Route path=":userNo" element={<UserProfile />} />
          </Route>

          <Route path="postMessageList" element={<PostMessageList />} />
        </Route>

        <Route path="manage" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="member" element={<Member />} />
          <Route path="petMom" element={<PetMomManage />} />
          <Route path="petSitter" element={<PetSitterManage />} />
          <Route path="reportMember" element={<ReportMember />} />
          <Route path="reportPost" element={<ReportPost />} />
          <Route path="modal" element={<Temp />} />
        </Route>

        <Route path="applicant" element={<ApplicantsList />} />
        <Route path="postMessage" element={<PostMessage />} />
        <Route path="sendMessage" element={<SendMessage />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


