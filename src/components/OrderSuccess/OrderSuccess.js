import React from "react";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
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
  },
  text: {
    fontSize: 14,
    color: "black",
  },
}));

const OrderSuccess = () => {
  const classes = useStyles();

  const renderOrder = ({ name, subtotal }) => {
    return (
      <div>
        <Card
          className={classes.containerMain}
          style={{ border: "none", boxShadow: "none" }}
        >
          <CardContent style={{ gridColumnEnd: "span 1" }}>
            <CreateOutlinedIcon className={classes.icon} />
          </CardContent>
          <CardContent style={{ gridColumnEnd: "span 11" }}>
            <Typography variant="h6" component="h2" color="textSecondary">
              Pedido em andamento
            </Typography>
            <Typography variant="h6" component="h2" className={classes.text}>
            {name}
            </Typography>
            <Typography variant="h6" component="h2" className={classes.text}>
              SUBTOTAL {formatPrice(subtotal)}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  };

  return <div>{renderOrder()}</div>;
};

export default OrderSuccess;
