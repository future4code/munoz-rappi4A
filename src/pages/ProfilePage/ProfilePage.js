import React from "react";
import { Footer } from "../../components/Footer/Footer";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Header } from "../../components/Header/Header";
import {
  Container,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import CardOrders from "../../components/CardOrders/CardOrders";
import CardProfile from "../../components/CardProfile/CardProfile";

const useStyles = makeStyles((theme) => ({
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
  useProtectedPage();
  const classes = useStyles();

  return (
    <div>
      <Header title={"Meu Perfil"} />
      <Container style={{ maxHeight: 500, overflow: "auto" }}>
        <CardProfile />
        <List className={classes.listHistory}>
          <ListItem>
            <ListItemText
              primary="Histórico de Pedidos"
              style={{ fontWeight: "bold", color: "black" }}
            />
          </ListItem>
          <Divider className={classes.line} />
        </List>
        <CardOrders />
      </Container>
      <Footer />
    </div>
  );
};

export default ProfilePage;

