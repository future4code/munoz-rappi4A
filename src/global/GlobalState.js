import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const token = localStorage.getItem("token");
  const [logout, setLogout] = useState(token ? "Sair" : "");

  const data = {
    token,
    logout,
    setLogout,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
