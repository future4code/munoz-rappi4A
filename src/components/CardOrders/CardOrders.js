import React, { useEffect, useState } from "react";
import { useRequestData } from "../../hooks/useRequestData";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerMain: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    borderShadow: "white",
    margin: "8px",
    "&:hover": {
      backgroundColor: "#EEEEEE",
    },
  },
  textRestaurant: {
    fontSize: 16,
    color: "#e86e5a",
  },
  textData: {
    fontSize: 14,
  },
  textPrice: {
    fontSize: 17,
    fontWeight: "bold",
  },
}));

const CardOrders = () => {
  const classes = useStyles();
  const token = localStorage.getItem("token");
  const {data, loading} = useRequestData("/orders/history", token);
  const [orders, setOrders] = useState()
  console.log(orders)
  useEffect(()=>{
    data &&
    setOrders(data.orders)
  }, [data])
  const renderOrders = () => {
    if (!loading && orders.length > 0) {
      return orders.map((item) => {
        return (
          <>
            <Card className={classes.containerMain}>
              <CardContent style={{ gridColumnEnd: "span 11" }} key={item.id}>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.textRestaurant}
                >
                  {item.restaurantName}
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.textData}
                >
                  {item.data}
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.textPrice}
                >
                  SUB-TOTAL R${item.totalPrice.toFixed(2)}
                </Typography>{" "}
              </CardContent>
            </Card>
          </>
        );
      });
    } else {
      return (
        <ListItem>
          {!loading && <ListItemText
            primary="Você não realizou nenhum pedido"
            style={{ fontWeight: "bold", color: "black", textAlign: "center" }}
          />}
        </ListItem>
      );
    }
  };

  return <div>{renderOrders()}</div>;
};

export default CardOrders;
