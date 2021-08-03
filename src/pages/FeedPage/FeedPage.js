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

const FeedPage = () => {
  useProtectedPage();
  const [filtered, setFiltered] = useState(false);
  const [RestaurantesFiltrados, setRestaurantesFiltrados] = useState([]);
  const { form, onChangeForm } = useForm({
    search: ""
})
  const token = localStorage.getItem("token");
  const { data, loading } = useRequestData("/restaurants", token);
  // console.log(data);

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
      return <CardRestaurants restaurant={restaurant} />;
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
      // } else if (restaurant.category === filteredTypes[restaurant.category]) {
      //   filteredTypes[restaurant.category].push(restaurant);
      // }
      // console.log("VAMO VER: ", filteredTypes);

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
            {loading && <p>Opa! deu ruim</p>}
            {filtered ? renderRestaurants : nameRestaurants || listRestaurants}
          </CardActionArea>
        </Container>
      </>
      <Footer />
    </div>
  );
};

export default FeedPage;
