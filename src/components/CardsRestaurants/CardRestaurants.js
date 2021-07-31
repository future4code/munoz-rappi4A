import { CardActionArea, Typography } from "@material-ui/core";
import React from "react";
import {
  CardContentStyle,
  CardMediaStyle,
  ContainerInfos,
  NameRestaurant,
} from "./CardRestaurants.style";

export default function CardRestaurants({ restaurant }) {
  return (
    <CardActionArea>
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
            {`Frete R$${restaurant.shipping},00`}
          </Typography>
        </ContainerInfos>
      </CardContentStyle>
    </CardActionArea>
  );
}
