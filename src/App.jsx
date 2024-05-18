import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import Spinner from "./components/Web/Shared/Layout/Spinner";

const Home = lazy(() => import("./pages/Web/Home"));
const Signup = lazy(() => import("./pages/Web/Member/Signup"));
const Find = lazy(() => import("./pages/Web/Member/Find"));
const ChangePw = lazy(() => import("./pages/Web/Member/ChangePw"));
const Login = lazy(() => import("./pages/Web/Member/Login"));
const Redirection = lazy(() => import("./pages/Web/Member/Redirection"));
const MyInfo = lazy(() => import("./pages/Web/Member/MyInfo"));
const NoticeList = lazy(() => import("./pages/Web/Support/NoticeList"));
const NoticeDetail = lazy(() => import("./pages/Web/Support/NoticeDetail"));
const InquiryList = lazy(() => import("./pages/Web/Support/InquiryList"));
const InquiryCreate = lazy(() => import("./pages/Web/Support/InquiryCreate"));
const NoticeManagement = lazy(() => import("./pages/Web/Admin/NoticeManagement"));
const InquiryManagement = lazy(() => import("./pages/Web/Admin/InquiryManagement"));
const ReportManagement = lazy(() => import("./pages/Web/Admin/ReportManagement"));
const UserManagement = lazy(() => import("./pages/Web/Admin/UserManagement"));
const GameRoutes = lazy(() => import("./router/GameRoutes"));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="member/join" element={<Signup />} />
          <Route path="member/find" element={<Find />} />
          <Route path="member/login" element={<Login />} />
          <Route path="member/myInfo" element={<MyInfo />} />
          <Route path="member/change-pw" element={<ChangePw />} />
          <Route path="member/kakao" element={<Redirection />} />

          <Route path="inquiry/list" element={<InquiryList />} />
          <Route path="inquiry/create" element={<InquiryCreate />} />
          <Route path="notice/list" element={<NoticeList />} />
          <Route path="notice/:noticeId" element={<NoticeDetail />} />

          <Route path="admin/notice" element={<NoticeManagement />} />
          <Route path="admin/inquiry" element={<InquiryManagement />} />
          <Route path="admin/report" element={<ReportManagement />} />
          <Route path="admin/user" element={<UserManagement />} />
        </Route>
        <Route
          path="/game/*"
          element={<GameRoutes />}
          errorElement={<ErrorBoundary path="/game" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
