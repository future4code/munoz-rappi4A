import styled from "styled-components"

export const RestaurantMenu = styled.main`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    margin-bottom: 10vh;
`

export const TiposDeComida = styled.p`
  margin-left: 20px;
  text-align: left;
  color: gray;
`;

export const ContainerTiposComida = styled.div`
  display: flex;
  align-items: flex-start;
`;