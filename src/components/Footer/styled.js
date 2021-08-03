import styled from "styled-components";

export const MdlMiniFooter = styled.footer`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 2px solid #bdbdbd;
  background-color: white;
`;

export const ListsIcons = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  li {
    cursor: pointer;
  }
`;
