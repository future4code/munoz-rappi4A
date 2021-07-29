import React from "react";
import { Footer } from "../../components/Footer/Footer";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Header } from "../../components/Header/Header";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import {
  Card,
  Container,
  CardContent,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
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
  icon: {
    cursor: "pointer",
  },
  text: {
    fontSize: 14,
    color: "black",
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
  listHistory: {
    width: "100%",
    maxWidth: 400,
  },
  line: {
    backgroundColor: "black",
    height: "2px",
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  useProtectedPage();
  return (
    <div>
      <Header title={"Meu Perfil"} />
      <Container style={{ maxHeight: 500, overflow: "auto" }}>
        <>
          <Card
            className={classes.containerMain}
            style={{ border: "none", boxShadow: "none" }}
          >
            <CardContent style={{ gridColumnEnd: "span 11" }}>
              <Typography variant="h6" component="h2" className={classes.text}>
                Bruna Oliveira
              </Typography>
              <Typography variant="h6" component="h2" className={classes.text}>
                bruna_o@gmail.com
              </Typography>
              <Typography variant="h6" component="h2" className={classes.text}>
                333.333.333-33
              </Typography>{" "}
            </CardContent>
            <CardContent style={{ gridColumnEnd: "span 1" }}>
              <CreateOutlinedIcon className={classes.icon} />
            </CardContent>
          </Card>
        </>
        <>
          <Card
            className={classes.containerMain}
            style={{ border: "none", boxShadow: "none" }}
          >
            <CardContent style={{ gridColumnEnd: "span 11" }}>
              <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                className={classes.text}
              >
                Endereço Cadastrado
              </Typography>
              <Typography variant="h6" component="h2" className={classes.text}>
                Rua Alessandra Vieira, 42 - Santana
              </Typography>{" "}
            </CardContent>
            <CardContent style={{ gridColumnEnd: "span 1" }}>
              <CreateOutlinedIcon className={classes.icon} />
            </CardContent>
          </Card>
        </>
        <List className={classes.listHistory}>
          <ListItem>
            <ListItemText
              primary="Histórico de Pedidos"
              style={{ fontWeight: "bold", color: "black" }}
            />
          </ListItem>
          <Divider className={classes.line} />
        </List>
        <>
          <Card className={classes.containerMain}>
            <CardContent style={{ gridColumnEnd: "span 11" }}>
              <Typography
                variant="h6"
                component="h2"
                className={classes.textRestaurant}
              >
                Burguer Vila Magdalena
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className={classes.textData}
              >
                23 de outubro 2021
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                className={classes.textPrice}
              >
                SUB-TOTAL R$67,00
              </Typography>{" "}
            </CardContent>
          </Card>
        </>
      </Container>
      <Footer />
    </div>
  );
};

export default ProfilePage;
