import React from "react";
import { useHistory } from "react-router-dom";
import { goToFeedPage, goToCartPage, goToProfilePage, } from "../../routes/coordinator";
import { makeStyles } from "@material-ui/core/styles";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { MdlMiniFooter, ListsIcons, FooterContainer } from "./style";

const useStyles = makeStyles(() => ({
  buttonColor: {
    "&:hover": {
      color: "#e86e5a",
    },
  },
}));

export function Footer() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <MdlMiniFooter>
      <FooterContainer>
        <ListsIcons>
          <li onClick={() => goToFeedPage(history)}>
            <HouseOutlinedIcon
              color="disabled"
              fontSize="large"
              className={classes.buttonColor}
            />
          </li>
          <li onClick={() => goToCartPage(history)}>
            <ShoppingCartOutlinedIcon
              color="disabled"
              fontSize="large"
              className={classes.buttonColor}
            />
          </li>
          <li onClick={() => goToProfilePage(history)}>
            <PermIdentityOutlinedIcon
              color="disabled"
              fontSize="large"
              className={classes.buttonColor}
            />
          </li>
        </ListsIcons>
      </FooterContainer>
    </MdlMiniFooter>
  );
}
