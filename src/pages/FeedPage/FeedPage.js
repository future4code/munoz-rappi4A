import {
  CardActionArea,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  CardContentStyle,
  CardMediaStyle,
  ContainerBusca,
  ContainerInfos,
  ContainerTiposComida,
  ContainerTodosTipos,
  NameRestaurant,
  SearchIconStyle,
  TiposDeComida,
} from "./feedPage.style";
import searchIcon from "../../assets/search.svg";
import Hamburguer from "../../assets/foto-hamburguer.jpg";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import CardRestaurants from "../../components/CardsRestaurants/CardRestaurants";

const FeedPage = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const { data } = useRequestData("/restaurants", token);
  console.log(data);

  let listRestaurants =
    data &&
    data.restaurants &&
    data.restaurants.map((restaurant, index) => {
      return <CardRestaurants restaurant={restaurant} />;
    });

  let typesOfFood =
    data &&
    data.restaurants &&
    data.restaurants.map((type, index) => {
      return (
        <ContainerTiposComida>
          <TiposDeComida>
            <strong>{type.category}</strong>
          </TiposDeComida>
        </ContainerTiposComida>
      );
    });

  return (
    <div>
      <>
        <Header showBackBtn={false} title={"Rappi4"} />
        <Container>
          <ContainerBusca>
            <TextField
              id="input-with-icon-textfield"
              placeholder="Restaurantes"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
            <SearchIconStyle src={searchIcon} />
          </ContainerBusca>
          <ContainerTodosTipos>
            <ContainerTiposComida>{typesOfFood}</ContainerTiposComida>
          </ContainerTodosTipos>
          <CardActionArea>{listRestaurants || "Opa! deu ruim"}</CardActionArea>
        </Container>
      </>
      <Footer />
    </div>
  );
};

export default FeedPage;
