import { CardContent, CardMedia, Typography } from "@material-ui/core";
import styled from "styled-components";

export const CardContentStyle = styled(CardContent)`
  border: solid 1px gray;
  height: 90px;
`;

export const CardMediaStyle = styled(CardMedia)`
  && {
    margin-top: 20px;
    height: 120px;
    border: solid 1px gray;
  }
`;

export const NameRestaurant = styled(Typography)`
  color: rgb(232, 110, 90);
`;

export const ContainerInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;
