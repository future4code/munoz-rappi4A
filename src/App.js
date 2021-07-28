import React from 'react';
import { Header } from "./components/Header/Header";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";


const App = () => {
  return (
    <GlobalState>
      <Header showBackBtn={false} title={"Rappi4"}/>
      <Router />
    </GlobalState>
  );
};

export default App;
