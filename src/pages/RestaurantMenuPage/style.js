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
    padding: 0 16px;
`

export const FoodTypes = styled.p`
  width: 100%;
  border-bottom: 1px solid #000;
  padding-bottom: 5px;
  text-align: left;
  color: #000;
`;

export const FoodTypesContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;