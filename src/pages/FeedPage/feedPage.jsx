import React from "react";
import { Header } from "../../components/Header/Header";
import searchIcon from "../../assets/search.svg";
import Hamburguer from "../../assets/foto-hamburguer.jpg";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  CardActionArea,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  CardContentStyle,
  CardMediaStyle,
  ContainerBusca,
  ContainerTiposComida,
  SearchIconStyle,
} from "./feedPage.style";
import { Container } from "@material-ui/core";
import Footer from "../../components/Footer/Footer";

const FeedPage = () => {
  useProtectedPage();
  return (
    <>
      <Header showBackBtn={false} title={"Rappi4"} />
      <Container>
        <ContainerBusca>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Restaurantes"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
          <SearchIconStyle src={searchIcon} />
        </ContainerBusca>
        <ContainerTiposComida>
          <p>
            <strong>Burger</strong>
          </p>
          <p>
            <strong>Asiática</strong>
          </p>
          <p>
            <strong>Massas</strong>
          </p>
          <p>
            <strong>Saudáveis</strong>
          </p>
        </ContainerTiposComida>
        <CardActionArea>
          <CardMediaStyle
            component={"img"}
            alt={"comida"}
            image={Hamburguer}
            tittle="Hambúrguer absurdo"
            height="150px"
          />
          <CardContentStyle>
            <Typography gutterBottom variant="h5" component="h2">
              Hambúrguer absurdo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Esse hambúrguer é muito brabo mesmo mas pq esse texto vai ser
              substituído por uma descrição de verdade.
            </Typography>
          </CardContentStyle>
        </CardActionArea>
        <CardActionArea>
          <CardMediaStyle
            component={"img"}
            alt={"comida"}
            image={Hamburguer}
            tittle="Hambúrguer absurdo"
            height="150px"
          />
          <CardContentStyle>
            <Typography gutterBottom variant="h5" component="h2">
              Hambúrguer absurdo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Esse hambúrguer é muito brabo mesmo mas pq esse texto vai ser
              substituído por uma descrição de verdade.
            </Typography>
          </CardContentStyle>
        </CardActionArea>
        <CardActionArea>
          <CardMediaStyle
            component={"img"}
            alt={"comida"}
            image={Hamburguer}
            tittle="Hambúrguer absurdo"
            height="150px"
          />
          <CardContentStyle>
            <Typography gutterBottom variant="h5" component="h2">
              Hambúrguer absurdo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Esse hambúrguer é muito brabo mesmo mas pq esse texto vai ser
              substituído por uma descrição de verdade.
            </Typography>
          </CardContentStyle>
        </CardActionArea>
      </Container>
    </>
  );
};

export default FeedPage;

/* <ContainerLista>
          <ImageFood src={Hamburguer} />
          <ContainerInfo>OIOIOIIOOI</ContainerInfo>
        </ContainerLista> */
