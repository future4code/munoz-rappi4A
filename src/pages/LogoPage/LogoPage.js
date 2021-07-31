import React from "react";
import logo from "../../assets/logo.svg";
import { ContainerApp, AppHeader, AppLogo } from "./styled";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";


const LogoPage = () => {
  const history = useHistory();

  return (
    <ContainerApp>
      <AppHeader>
        <AppLogo src={logo} alt="logo" onClick={() => goToLoginPage(history)} />
      </AppHeader>
    </ContainerApp>
  );
};

export default LogoPage;
