import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogoPage from "../pages/LogoPage/LogoPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddressPage from "../pages/AddressPage/address";
import FeedPage from "../pages/FeedPage/FeedPage";
import RestaurantListPage from "../pages/RestaurantListPage/RestaurantListPage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LogoPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>
        <Route exact path="/endereco">
          <AddressPage />
        </Route>
        <Route exact path="/home">
          <FeedPage />
        </Route>
        <Route exact path="/restaurante/:id">
          <RestaurantListPage />
        </Route>
        <Route exact path="/meu-carrinho">
          <CartPage />
        </Route>
        <Route exact path="/meu-perfil">
          <ProfilePage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
