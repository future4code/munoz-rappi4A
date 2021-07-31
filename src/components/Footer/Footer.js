import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { MdlMiniFooter, ListsIcons } from "./styled";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import {
  goToFeedPage,
  goToCartPage,
  goToProfilePage,
} from "../../routes/coordinator";

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
      <div class="container">
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
      </div>
    </MdlMiniFooter>
  );
}
