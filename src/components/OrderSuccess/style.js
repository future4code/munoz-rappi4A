import styled from "styled-components";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

export const ContainerOrder = styled.aside`
  transition: width 1s;
  width: ${(props) => (props.width ? "100%" : "0")};
  height: 118px;
  background-color: #e86e5a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 56px;
  cursor: pointer;
  overflow: hidden;
`;

export const MenuOpenOrder = styled(MenuOpenIcon)`
  width: 40px;
  height: 40px;
  color: #e86e5a;
  cursor: pointer;
`;
