import React from "react";
import { Header } from "./components/Header/Header";
import Router from "./routes/Router";

const App = () => {
  return (
    <>
      <Header showBackBtn={false} title={"Rappi4"} />
      <Router />
    </>
  );
};

export default App;
