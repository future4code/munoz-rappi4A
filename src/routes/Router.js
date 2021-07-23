import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import AddAddressPage from "../pages/AddressPage/address";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <LoginPage />
        </Route>
        <Route exact path={"/address"}>
          <AddAddressPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
