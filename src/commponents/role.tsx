import {  type FC } from "react";
import { Navigate } from "react-router-dom";
import { type RootState } from "../store/store";
import { useSelector } from "react-redux";

interface RoleProps {
  children?: React.ReactNode;
  roles: string[];
}
const Role: FC<RoleProps> = ({ children, roles }) => {
    const { isLoggedIn, user, token } = useSelector((state: RootState) => state.auth);

    if (!isLoggedIn || !token || !user || !roles.includes(user.role))
        return <Navigate to="/login" replace />;
    return <> {children}</>
}
export default Role;
