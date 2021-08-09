import React, { useContext, useEffect, useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { useForm } from "../../hooks/useForm";
import CardRestaurants from "../../components/CardsRestaurants/CardRestaurants";
import Loading from "../../components/Loading/Loading";
import PedidoEmAndamento from "../../components/PedidoEmAndamento/PedidoEmAndamento";
import GlobalStateContext from "../../global/GlobalStateContext";
import { CardActionArea, InputAdornment } from "@material-ui/core";
import { SearchContainer, FoodTypeContainer, AllTypeContainer, FoodTypes, SearchField, ContainerStyle } from "./style";


const FeedPage = () => {
  useProtectedPage();
  const [filtered, setFiltered] = useState(false);
  const [RestaurantesFiltrados, setRestaurantesFiltrados] = useState([]);
  const { form, onChangeForm } = useForm({
    search: "",
  });
  const token = localStorage.getItem("token");
  const { data, loading } = useRequestData("/restaurants", token);
  const { hasActiveOrder, verifyActiveOrder } = useContext(GlobalStateContext);
  const [confirm, setConfirm] = useState(hasActiveOrder);

  const searchResult =
    form.search &&
    data.restaurants?.filter((item) => {
      return item.name.toLowerCase().includes(form.search.toLowerCase());
    });

  useEffect(() => {
    if (data?.order) {
      setConfirm(true);
    }
    verifyActiveOrder();
  }, [confirm]);

  let nameRestaurants =
    form.search && searchResult.length > 0
      ? searchResult?.map((restaurant, index) => {
          return <CardRestaurants restaurant={restaurant} />;
        })
      : form.search &&
        !searchResult.length && (
          <p>Busca não coincide com nenhum restaurante :(</p>
        );

  let listRestaurants =
    data &&
    data.restaurants &&
    data.restaurants.map((restaurant, index) => {
      return (
        <CardRestaurants key={index} restaurant={restaurant} height="150px" />
      );
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
        <FoodTypeContainer
          onClick={() => onClickCategorias(restaurant.category)}
        >
          <FoodTypes>
            <strong>{restaurant.category}</strong>
          </FoodTypes>
        </FoodTypeContainer>
      );
    });

  const filteredRestaurants = [];
  const onClickCategorias = (selectCategory) => {
    data.restaurants.forEach((restaurant) => {
      if (restaurant.category === selectCategory) {
        filteredRestaurants.push(restaurant);
      }
    });
    setFiltered(true);
    setRestaurantesFiltrados(filteredRestaurants);
  };

  const renderRestaurants = RestaurantesFiltrados.map((restaurant) => {
    return <CardRestaurants key={restaurant.id} restaurant={restaurant} />;
  });
  return (
    <div>
      <>
        <Header showBackBtn={false} title={"Rappi4"} />
        <ContainerStyle>
          <SearchContainer>
            <SearchField
              id="input-with-icon-textfield"
              placeholder="Restaurantes"
              type="text"
              onChange={onChangeForm}
              value={form.search}
              name={"search"}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </SearchContainer>
          <AllTypeContainer>
            <FoodTypeContainer>{typesOfFood}</FoodTypeContainer>
          </AllTypeContainer>
          <CardActionArea>
            {loading && <Loading />}
            {filtered ? renderRestaurants : nameRestaurants || listRestaurants}
          </CardActionArea>
        </ContainerStyle>
      </>
      <PedidoEmAndamento trigger={confirm} />
      <Footer />
    </div>
  );
};

export default FeedPage;
