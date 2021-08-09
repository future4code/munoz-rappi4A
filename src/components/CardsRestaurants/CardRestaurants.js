import { Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { goToRestaurantMenuPage } from "../../routes/coordinator";
import { formatPrice } from "../../utils/formatPrice";
import { CardContentStyle, CardMediaStyle, ContainerInfos, NameRestaurant, CardActionAreaStyle } from "./style";

export default function CardRestaurants({ restaurant }) {
  const history = useHistory();

  return (
    <CardActionAreaStyle onClick={() => goToRestaurantMenuPage(history, restaurant.id)}>
      <CardMediaStyle
        component={"img"}
        alt={restaurant.category}
        image={restaurant.logoUrl}
        title={restaurant.name}
        height="150px"
      />
      <CardContentStyle>
        <NameRestaurant gutterBottom variant="h5" component="h2">
          {restaurant.name}
        </NameRestaurant>
        <ContainerInfos>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${restaurant.deliveryTime}min`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Frete ${formatPrice(restaurant.shipping)}`}
          </Typography>
        </ContainerInfos>
      </CardContentStyle>
    </CardActionAreaStyle>
  );
}
