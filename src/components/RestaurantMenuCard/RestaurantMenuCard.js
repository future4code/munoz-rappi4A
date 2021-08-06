import { CardActionArea, Typography } from "@material-ui/core";
import React from "react";
import {
  CardContentStyle,
  CardMediaStyle,
  ContainerInfos,
  NameRestaurant,
  RestaurantInfos,
} from "./styled";

export default function RestaurantMenuCard({ restaurant }) {
  return (
    <CardActionArea>
      <CardMediaStyle
        component={"img"}
        alt={restaurant.category}
        image={restaurant.logoUrl}
        title={restaurant.name}
      />
      <CardContentStyle>
        <NameRestaurant gutterBottom variant="h5" component="h3">
          {restaurant.name}
        </NameRestaurant>
        <ContainerInfos>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${restaurant.category}`}
          </Typography>
          <RestaurantInfos>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${restaurant.deliveryTime} min`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Frete R$${restaurant.shipping},00`}
            </Typography>
          </RestaurantInfos>

          <Typography variant="body2" color="textSecondary" component="p">
            {`${restaurant.address}`}
          </Typography>
        </ContainerInfos>
      </CardContentStyle>
    </CardActionArea>
  );
}
