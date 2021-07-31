import { CardContent, CardMedia, Typography } from "@material-ui/core";
import styled from "styled-components";

export const CardContentStyle = styled(CardContent)`
  border: solid 1px gray;
  height: 60px;
`;

export const CardMediaStyle = styled(CardMedia)`
  && {
    margin-top: 10px;
  }
`;

export const NameRestaurant = styled(Typography)`
  color: rgb(232, 110, 90);
`;

export const ContainerInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;
