
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Navigate } from "react-router-dom";
import DashboardC from "./customer/dashboard_c";
import DashboardAg from "./agent/dashboard_ag";
import DashboardAd from "./admin/dashboard_ad";

const Dashboard = () => {
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn || !user) {
    return <Navigate to="/login" replace />;
  }

  switch (user.role) {
    case "customer":
      return <DashboardC />;
    case "agent":
      return <DashboardAg />;
    case "admin":
      return <DashboardAd />;
    default:
      return <Navigate to="/login" replace />;
  }
};

export default Dashboard;