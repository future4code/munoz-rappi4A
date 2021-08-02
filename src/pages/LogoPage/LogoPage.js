import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import { ContainerApp, AppHeader, AppLogo } from "./styled";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";
import { CircularProgress } from "@material-ui/core";


const LogoPage = () => {
  const history = useHistory();
  

  useEffect(() => {
    setTimeout(() => {
      goToLoginPage(history)
    }, 2000);
  }, [history]);

 
  return (
    <ContainerApp>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <CircularProgress color={"secondary"} />
      </AppHeader>
    </ContainerApp>
  );
};

export default LogoPage;
