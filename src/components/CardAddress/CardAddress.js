import React from "react";
import { useRequestData } from "../../hooks/useRequestData";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { goToEditAddressPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  containerMain: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    borderShadow: "white",
    // margin: "8px",
    backgroundColor: "#EEEEEE",
  },
  icon: {
    cursor: "pointer",
  },
  text: {
    fontSize: 14,
    color: "black",
  },
}));

const CardAddress = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const token = localStorage.getItem("token");
  const { data: profile, loading } = useRequestData("/profile", token);

  const renderAddress = () => {
    return (
      <div>
        {loading && <p>Carregando...</p>}
        {profile && (
          <div>
            <Card
              className={classes.containerMain}
              style={{ border: "none", boxShadow: "none" }}
            >
              <CardContent style={{ gridColumnEnd: "span 11" }}>
                <Typography variant="h6" component="h2" color="textSecondary">
                  {props.onCartPage ?
                    'Endereço de entrega'
                    :
                    "Endereço Cadastrado"}
                </Typography>

                {profile.user.hasAddress === true ? (
                  <>
                    <Typography
                      variant="h6"
                      component="h2"
                      className={classes.text}
                    >
                      {profile.user.address}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      variant="h6"
                      component="h2"
                      className={classes.text}
                    >
                      Atualize o seu endereço
                    </Typography>
                  </>
                )}
              </CardContent>
              <CardContent style={{ gridColumnEnd: "span 1" }}>
                {props.showEditBtn ? (
                  <CreateOutlinedIcon
                    className={classes.icon}
                    onClick={() => goToEditAddressPage(history)}
                  />
                ) : (
                  <div></div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  };

  return <div>{renderAddress()}</div>;
};

export default CardAddress;
