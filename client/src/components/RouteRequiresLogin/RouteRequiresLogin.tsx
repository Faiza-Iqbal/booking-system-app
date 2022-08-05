// lib
import { Navigate, Outlet } from "react-router-dom";
import { If, Then, Else } from "react-if";
// src
import { getCurrentUser } from "../../utils/helperFunctions";

const RouteRequiresLogin = () => {
  const user = getCurrentUser();
  return (
    <If condition={user}>
      <Then>
        <Outlet />
      </Then>
      <Else>
        <Navigate to="/" />
      </Else>
    </If>
  );
};

export default RouteRequiresLogin;
