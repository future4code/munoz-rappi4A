import React from "react";
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { formatPrice } from "../../utils/formatPrice";

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
    color: "white"
  },
  text: {
    fontSize: 14,
    color: "black",
  },
}));

const OrderSuccess = () => {
  const classes = useStyles();

  const renderOrder = () => {
    return (
      <div>
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
            Burgue
            </Typography>
            <Typography variant="h6" component="h2" className={classes.text}>
              SUBTOTAL
              {/* {formatPrice(subtotal)} */}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  };

  return <div>{renderOrder()}</div>;
};

export default OrderSuccess;
