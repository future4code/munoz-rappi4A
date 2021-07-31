import { CardContent, CardMedia, Typography } from "@material-ui/core";
import styled from "styled-components";

export const ContainerBusca = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchIconStyle = styled.img`
  z-index: 10;
  top: 75px;
  left: 70px;
  position: absolute;
`;
export const ContainerTodosTipos = styled.div`
  overflow-x: scroll;
  margin-top: 20px;
`;
export const ContainerTiposComida = styled.div`
  display: flex;
`;
export const TiposDeComida = styled.p`
  margin-right: 20px;
`;

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
