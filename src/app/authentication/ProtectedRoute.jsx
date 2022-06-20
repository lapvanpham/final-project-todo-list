import React from "react";
import { Navigate, Route } from "react-router-dom";

import { useLogin } from '../authentication';

// import Others from "../../pages/others";

export const ProtectedRoute = ({ protect, component: Component, ...rest }) => {
  const { loginState } = useLogin();

  if (loginState.loading) {
    return (
      // <Others />
      <div>Order</div>
    )
  }

  if (!loginState.isLogin) {
    return <Navigate to='/' />
  }

  return <Component loginState={loginState} />
}