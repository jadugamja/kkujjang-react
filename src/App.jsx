import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Web/Home"));
const Signup = lazy(() => import("./pages/Web/Member/Signup"));
const Find = lazy(() => import("./pages/Web/Member/Find"));
const ChangePw = lazy(() => import("./pages/Web/Member/ChangePw"));
const Login = lazy(() => import("./pages/Web/Member/Login"));
const Withdrawal = lazy(() => import("./pages/Web/Member/Withdrawal"));
const NoticeList = lazy(() => import("./pages/Web/Notice/NoticeList"));
const NoticeDetail = lazy(() => import("./pages/Web/Notice/NoticeDetail"));
const InquiryList = lazy(() => import("./pages/Web/Inquiry/InquiryList"));
const InquiryCreate = lazy(() => import("./pages/Web/Inquiry/InquiryCreate"));
const NoticeManagement = lazy(() => import("./pages/Web/Admin/NoticeManagement"));
const InquiryManagement = lazy(() => import("./pages/Web/Admin/InquiryManagement"));
const ReportManagement = lazy(() => import("./pages/Web/Admin/ReportManagement"));
const UserManagement = lazy(() => import("./pages/Web/Admin/UserManagement"));
const Lobby = lazy(() => import("./pages/Game/Lobby"));
const GameRoom = lazy(() => import("./pages/Game/GameRoom"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="member/join" element={<Signup />} />
            <Route path="member/find" element={<Find />} />
            <Route path="member/login" element={<Login />} />
            <Route path="member/out" element={<Withdrawal />} />

            <Route path="notice/list" element={<NoticeList />} />
            <Route path="notice/:noticeId" element={<NoticeDetail />} />
            <Route path="inquiry/list" element={<InquiryList />} />
            <Route path="inquiry/create" element={<InquiryCreate />} />
            <Route path="notice/list" element={<NoticeList />} />
            <Route path="notice/:noticeId" element={<NoticeDetail />} />
            <Route path="inquiry/list" element={<InquiryList />} />
            <Route path="inquiry/create" element={<InquiryCreate />} />

            <Route path="admin/notice" element={<NoticeManagement />} />
            <Route path="admin/inquiry" element={<InquiryManagement />} />
            <Route path="admin/report" element={<ReportManagement />} />
            <Route path="admin/user" element={<UserManagement />} />
          </Route>
          <Route path="/game" element={<Lobby />} />
          <Route path="/game/:gameroomId" element={<GameRoom />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
