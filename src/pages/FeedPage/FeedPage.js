import {
  CardActionArea,
  Container,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  ContainerBusca,
  ContainerTiposComida,
  ContainerTodosTipos,
  SearchIconStyle,
  TiposDeComida,
} from "./feedPage.style";
import searchIcon from "../../assets/search.svg";
import { useRequestData } from "../../hooks/useRequestData";
import CardRestaurants from "../../components/CardsRestaurants/CardRestaurants";
import Loading from "../../components/Loading/Loading";

const FeedPage = () => {
  const [filtered, setFiltered] = useState(false);
  const [RestaurantesFiltrados, setRestaurantesFiltrados] = useState([]);
  useProtectedPage();
  const token = localStorage.getItem("token");
  const { data } = useRequestData("/restaurants", token);
  console.log(data);

  let listRestaurants =
    data &&
    data.restaurants &&
    data.restaurants.map((restaurant, index) => {
      return <CardRestaurants restaurant={restaurant} height="150px" />;
    });
  const filteredTypes = [];
  let typesOfFood =
    data &&
    data.restaurants &&
    data.restaurants.map((restaurant) => {
      if (restaurant.category !== filteredTypes[restaurant.category]) {
        filteredTypes.push(restaurant.category);
        filteredTypes[restaurant.category] = [];
        filteredTypes[restaurant.category].push(restaurant);
      }

      return (
        <ContainerTiposComida
          onClick={() => onClickCategorias(restaurant.category)}
        >
          <TiposDeComida>
            <strong>{restaurant.category}</strong>
          </TiposDeComida>
        </ContainerTiposComida>
      );
    });

  const filteredRestaurants = [];
  const onClickCategorias = (selectCategory) => {
    data.restaurants.forEach((restaurant) => {
      if (restaurant.category === selectCategory) {
        console.log(restaurant);
        filteredRestaurants.push(restaurant);
      }
    });

    console.log(filteredRestaurants);
    setFiltered(true);
    setRestaurantesFiltrados(filteredRestaurants);
  };
  console.log(RestaurantesFiltrados);

  const renderRestaurants = RestaurantesFiltrados.map((restaurant) => {
    return <CardRestaurants restaurant={restaurant} />;
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
          <CardActionArea>
            {filtered ? renderRestaurants : listRestaurants || <Loading />}
          </CardActionArea>
        </Container>
      </>
      <Footer />
    </div>
  );
};

export default FeedPage;
