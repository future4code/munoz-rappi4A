import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import BackButton from "../../assets/back.svg";
import { HeaderContainer, Title } from "./style";

export function Header(props) {
  const history = useHistory();
  const { token, logout, setLogout } = useContext(GlobalStateContext);

  const goToPreviousPage = () => {
    history.goBack();
  };

  const logoutItem = () => {
    localStorage.removeItem("token");
  };

  const logoutAction = () => {
    if (token) {
      logoutItem();
      setLogout("");
      goToLoginPage(history)
    }
  };

  return (
    <HeaderContainer>
      {props.showBackBtn ? (
        <img src={BackButton} onClick={goToPreviousPage} alt="" />
      ) : (
        <div></div>
      )}

      <Title>{props.title}</Title>
      <Title onClick={logoutAction}>{logout}</Title>

      <div></div>
    </HeaderContainer>
  );
}
