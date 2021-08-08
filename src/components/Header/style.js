import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 175px 1fr;
  height: 44px;
  /* width: 360px; */
  width: 100%;
  /* margin: 0 0 16px; */
  padding: 10px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  img {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  text-align: center;
  cursor: pointer;
`;
