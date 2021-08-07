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
import { useForm } from "../../hooks/useForm";
import CardRestaurants from "../../components/CardsRestaurants/CardRestaurants";
import Loading from "../../components/Loading/Loading";
import OrderSuccess from "../../components/OrderSuccess/OrderSuccess";

const FeedPage = () => {
  useProtectedPage();
  const [filtered, setFiltered] = useState(false);
  const [RestaurantesFiltrados, setRestaurantesFiltrados] = useState([]);
  const { form, onChangeForm } = useForm({
    search: ""
})
  const token = localStorage.getItem("token");
  const { data, loading } = useRequestData("/restaurants", token);

  const searchResult = form.search && data.restaurants?.filter((item) => {
    return item.name.toLowerCase().includes(form.search.toLowerCase())
    })

  let nameRestaurants =
    form.search && searchResult.length > 0 ?
    searchResult?.map((restaurant, index) => {
      return <CardRestaurants restaurant={restaurant} />;
    }) : form.search && !searchResult.length && <p>Busca não coincide com nenhum restaurante :(</p>

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
    return <CardRestaurants restaurant={restaurant} />
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
              type="text"
              onChange={onChangeForm}
              value={form.search}
              name={"search"}
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
            {loading && <Loading />}
            {filtered ? renderRestaurants : nameRestaurants || listRestaurants}
          </CardActionArea>
        </Container>
      </>
      <OrderSuccess />
      <Footer />
    </div>
  );
};

export default FeedPage;
