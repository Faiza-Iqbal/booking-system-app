import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type AuthOPropsType = {
  children: React.ReactNode;
};
const Auth0ProviderwithNavigate = ({ children }: AuthOPropsType) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "";

  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderwithNavigate;
