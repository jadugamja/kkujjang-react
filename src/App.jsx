import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./router/ProtectedRoute";
import NotFound from "@/pages/NotFound";

const Home = lazy(() => import("@/pages/Web/Home"));
const Signup = lazy(() => import("@/pages/Web/Member/Signup"));
const Find = lazy(() => import("@/pages/Web/Member/Find"));
const Login = lazy(() => import("@/pages/Web/Member/Login"));
const Withdrawal = lazy(() => import("@/pages/Web/Member/Withdrawal"));
const NoticeList = lazy(() => import("@/pages/Web/Notice/NoticeList"));
const NoticeDetail = lazy(() => import("@/pages/Web/Notice/NoticeDetail"));
const InquiryList = lazy(() => import("@/pages/Web/Inquiry/InquiryList"));
const InquiryCreate = lazy(() => import("@/pages/Web/Inquiry/InquiryCreate"));
const NoticeManagement = lazy(() => import("@/pages/Web/Admin/NoticeManagement"));
const InquiryManagement = lazy(() => import("@/pages/Web/Admin/InquiryManagement"));
const ReportManagement = lazy(() => import("@/pages/Web/Admin/ReportManagement"));
const UserManagement = lazy(() => import("@/pages/Web/Admin/UserManagement"));
const Lobby = lazy(() => import("@/pages/Game/Lobby"));
const GameRoom = lazy(() => import("@/pages/Game/GameRoom"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="notice/list" element={<NoticeList />} />
          <Route path="notice/:noticeId" element={<NoticeDetail />} />

          <Route
            path="member/*"
            element={
              <ProtectedRoute authentication={false}>
                <Routes>
                  <Route path="join" element={<Signup />} />
                  <Route path="find" element={<Find />} />
                  <Route path="login" element={<Login />} />
                </Routes>
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="inquiry/*"
            element={
              <ProtectedRoute authentication={true} member={true}>
                <Routes>
                  <Route path="list" element={<InquiryList />} />
                  <Route path="create" element={<InquiryCreate />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="admin/*"
            element={
              <ProtectedRoute authentication={true} admin={true}>
                <Routes>
                  <Route path="notice" element={<NoticeManagement />} />
                  <Route path="inquiry" element={<InquiryManagement />} />
                  <Route path="report" element={<ReportManagement />} />
                  <Route path="user" element={<UserManagement />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ProtectedRoute>
            }
          ></Route>
        </Route>

        <Route
          path="/member/out"
          element={
            <ProtectedRoute authentication={true}>
              <Withdrawal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/game"
          element={
            <ProtectedRoute authentication={true}>
              <Lobby />
            </ProtectedRoute>
          }
        />
        <Route
          path="/game/:gameroomId"
          element={
            <ProtectedRoute authentication={true}>
              <GameRoom />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
