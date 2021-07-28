import { CardContent, CardMedia } from "@material-ui/core";
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

export const ContainerTiposComida = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CardContentStyle = styled(CardContent)`
  border: solid 1px gray;
  height: 90px;
`;

export const CardMediaStyle = styled(CardMedia)`
  && {
    margin-top: 10px;
  }
`;
