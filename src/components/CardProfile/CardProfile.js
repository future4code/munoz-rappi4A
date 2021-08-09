import React from "react";
import { useRequestData } from "../../hooks/useRequestData";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { CardContent, Typography, makeStyles } from "@material-ui/core";
import { goToEditProfilePage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { CardStyle } from "./style";

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
  icon: {
    cursor: "pointer",
  },
  text: {
    fontSize: 14,
    color: "black",
  },
}));

const CardProfile = () => {
  const history = useHistory();
  const classes = useStyles();
  const token = localStorage.getItem("token");
  const { data: profile } = useRequestData("/profile", token);

  const renderProfile = () => {
    return (
      <div>
        {profile && (
          <div>
            <CardStyle
              className={classes.containerMain}
              style={{ border: "none", boxShadow: "none" }}
            >
              <CardContent style={{ gridColumnEnd: "span 11" }}>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.text}
                >
                  {profile.user.name}
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.text}
                >
                  {profile.user.email}
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.text}
                >
                  {profile.user.cpf}
                </Typography>{" "}
              </CardContent>
              <CardContent style={{ gridColumnEnd: "span 1" }}>
                <CreateOutlinedIcon
                  className={classes.icon}
                  onClick={() => goToEditProfilePage(history)}
                />
              </CardContent>
            </CardStyle>
          </div>
        )}
      </div>
    );
  };

  return <div>{renderProfile()}</div>;
};

export default CardProfile;
