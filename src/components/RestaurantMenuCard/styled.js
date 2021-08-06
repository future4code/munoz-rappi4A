import { CardContent, CardMedia, Typography } from "@material-ui/core";
import styled from "styled-components";

export const CardContentStyle = styled(CardContent)`
  border-radius: 15px;
  height: fit-content;  
`;

export const CardMediaStyle = styled(CardMedia)`
  && {
    margin-top: 20px;
    height: 120px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border-color: purple;
  }
`;

export const NameRestaurant = styled(Typography)`
  color: rgb(232, 110, 90);
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
`;

export const RestaurantInfos = styled.div`
  display: flex;
  gap: 54px;
`