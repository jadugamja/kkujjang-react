import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/userState";

const ProtectedRoute = ({ authentication, member = false, admin = false, children }) => {
  const user = useRecoilValue(userState);
  const isAuthenticated = user != null; // 게스트, 사용자, 관리자

  if (!authentication) {
    return !isAuthenticated ? children : <Navigate to="/" />;
  } else {
    if (!isAuthenticated) return <Navigate to="/member/login" />;

    if (member) {
      return user?.role !== "admin" ? children : <Navigate to="/" />;
    } else if (admin) {
      return user?.role !== "admin" ? <Navigate to="/" /> : children;
    }

    return children;
  }
};

ProtectedRoute.propTypes = {
  authentication: PropTypes.bool,
  member: PropTypes.bool,
  admin: PropTypes.bool,
  children: PropTypes.node
};

export default ProtectedRoute;
