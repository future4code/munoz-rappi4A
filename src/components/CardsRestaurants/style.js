import { CardContent, CardMedia, Typography, CardActionArea } from "@material-ui/core";
import styled from "styled-components";

export const CardActionAreaStyle = styled(CardActionArea)`
  && {
    border: solid 1px gray;
    border-radius: 8px;
    margin: 10px 0;
  }
`;

export const CardContentStyle = styled(CardContent)`
  height: 90px;
  border-radius: 0 0 8px 8px;
`;

export const CardMediaStyle = styled(CardMedia)`
  && {
    height: 120px;
    border-radius: 8px 8px 0 0;
  }
`;

export const NameRestaurant = styled(Typography)`
  color: rgb(232, 110, 90);
`;

export const ContainerInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;
