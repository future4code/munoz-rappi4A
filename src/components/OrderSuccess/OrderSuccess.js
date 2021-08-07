import React, { useState } from "react";
import { AccessTimeOutlinedIcon } from "@material-ui/icons/AccessTimeOutlined";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { useRequestData } from "../../hooks/useRequestData";
import { formatPrice } from "../../utils/formatPrice";
import { ContainerOrder, MenuOpenOrder } from "./styled";

const useStyles = makeStyles((theme) => ({
  containerMain: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    borderShadow: "white",
    margin: "8px",
    backgroundColor: "#e86e5a",
  },
  icon: {
    cursor: "pointer",
    color: "white",
  },
  text: {
    fontSize: 14,
    color: "black",
  },
}));

const OrderSuccess = () => {
  const classes = useStyles();
  const token = localStorage.getItem("token");
  const { activeOrder } = useRequestData("/active-order", token);
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(false);

  const animation = () => {
    setShow(!show);
    setTimeout(() => {
      setWidth(!width);
    }, 500);
  };

  const renderOrder = () => {
    return activeOrder && activeOrder.totalPrice ? (
      show ? (
        <ContainerOrder onClick={animation} width={width}>
          <Card
            className={classes.containerMain}
            style={{ border: "none", boxShadow: "none" }}
          >
            <CardContent style={{ gridColumnEnd: "span 1" }}>
              <AccessTimeOutlinedIcon className={classes.icon} />
            </CardContent>
            <CardContent style={{ gridColumnEnd: "span 11" }}>
              <Typography variant="h6" component="h2" color="textSecondary">
                Pedido em andamento
              </Typography>
              <Typography variant="h6" component="h2" className={classes.text}>
                {activeOrder.restaurantName}
              </Typography>
              <Typography variant="h6" component="h2" className={classes.text}>
                SUBTOTAL {formatPrice(activeOrder.totalPrice.toFixed(2))}
              </Typography>
            </CardContent>
          </Card>
        </ContainerOrder>
      ) : (
        <div>
          <StylesProvider injectFirst>
            <MenuOpenOrder onClick={animation} />
          </StylesProvider>
        </div>
      )
    ) : (
      <></>
    );
  };

  return <div>{renderOrder()}</div>;
};

export default OrderSuccess;