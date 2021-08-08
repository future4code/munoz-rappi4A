import styled from "styled-components";
import { Container, TextField } from "@material-ui/core";

export const SearchField = styled(TextField)`
  width: 100%;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border-radius: 2px;
  color: #b8b8b8;
`;

export const SearchIconStyle = styled.img`
  z-index: 10;
  top: 68px;
  left: 65px;
  position: absolute;
`;

export const ContainerStyle = styled(Container)`
  padding-bottom: 75px;
`

export const AllTypeContainer = styled.div`
  overflow-x: scroll;
  margin-top: 20px;
  padding: 8px;
`;
export const FoodTypeContainer = styled.div`
  display: flex;
`;
export const FoodTypes = styled.p`
  margin-right: 20px;
  cursor: pointer;
  :hover{
    border-bottom: 2px rgb(232, 110, 90) solid;
    color: rgb(232, 110, 90);
  }
`;
