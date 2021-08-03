import styled from "styled-components";

export const ContainerBusca = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  /* border: 2px blue solid; */
`;

export const SearchIconStyle = styled.img`
  z-index: 10;
  top: 68px;
  left: 65px;
  position: absolute;
`;
export const ContainerTodosTipos = styled.div`
  overflow-x: scroll;
  margin-top: 20px;
  padding: 8px;
  /* border: solid 2px green; */
`;
export const ContainerTiposComida = styled.div`
  display: flex;
`;
export const TiposDeComida = styled.p`
  margin-right: 20px;

  :hover {
    border-bottom: 2px rgb(232, 110, 90) solid;
    color: rgb(232, 110, 90);
  }
`;
