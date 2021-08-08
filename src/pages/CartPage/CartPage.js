import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import CardAddress from "../../components/CardAddress/CardAddress";

import useProtectedPage from "../../hooks/useProtectedPage";
import { CartCard } from "../../components/CartCard/CartCard";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

import {
  ButtonLarge,
  DeliverAddress,
  DeviceContainer,
  ImageContainer,
  InfoBox,
  PaymentMethodContainer,
  QuantityBox,
  RemoveButton,
  RestaurantDetails,
  ShippingContainer,
  TotalContainer,
  TotalValue,
} from "./styled";
import { formatPrice } from "../../utils/formatPrice";
import PedidoEmAndamento from "../../components/PedidoEmAndamento/PedidoEmAndamento";
import { goToFeedPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const mockGetRestaurants = {
  restaurants: [
    {
      id: "1",
      address: "Rua das Margaridas, 110 - Jardim das Flores",
      deliveryTime: 60,
      name: "Habibs",
      shipping: 6,
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de",
      description:
        "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
      category: "Árabe",
    },
    {
      id: "10",
      description:
        "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Ftadashii.png?alt=media&token=0e4b9b8c-3b6e-4a78-bd49-d3576657a342",
      deliveryTime: 50,
      shipping: 13,
      category: "Asiática",
      name: "Tadashii",
      address: "Travessa Reginaldo Pereira, 130 - Ibitinga",
    },
    {
      id: "2",
      category: "Hamburguer",
      deliveryTime: 15,
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fmcdonalds.png?alt=media&token=87a0fc52-3b8d-4475-b3e4-6ff730356121",
      address: "Avenida dos Papagaios, 1350 - Sta. Efigênia",
      description:
        "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
      shipping: 19,
      name: "McDonalds",
    },
    {
      id: "3",
      name: "Cantina Mamma Perrotta",
      shipping: 2,
      category: "Italiana",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fcantinamammaperrotta.jpg?alt=media&token=3a4e76b6-3d07-414b-8672-e624f5a10a76",
      deliveryTime: 20,
      description:
        "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
      address: "Rua Barão do Rio Branco, 98 - Centro",
    },
    {
      id: "4",
      deliveryTime: 45,
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fbaciodilatte.png?alt=media&token=03839175-d9b3-4024-a516-5ce2cbfc6f30",
      address: "Travessa Junqueira de Melo, 315 - Marginal",
      category: "Sorvetes",
      shipping: 10,
      name: "Sorveteria Bacio di Latte",
      description:
        "Gelatos de raízes italianas feitos artesanalmente e com ingredientes de altíssima qualidade. Confira todos os nossos deliciosos sabores!",
    },
    {
      id: "5",
      category: "Carnes",
      description:
        "Inaugurado em 1988 nos Estados Unidos e chegou ao Brasil 9 anos depois. Hoje, o restaurante marca presença em 20 cidades em todo o país, com um estilo casual que vai fazer você se sentir no Outback Australiano",
      address: "Alameda dos Marsupiais, 505 - Humaitá",
      name: "Outback Steakhouse",
      shipping: 18,
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Foutback.png?alt=media&token=6c3af525-e6f5-4f96-b5d5-a0ad6702a838",
      deliveryTime: 20,
    },
    {
      id: "6",
      shipping: 4,
      category: "Baiana",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fsotero.jpg?alt=media&token=c8760cea-f8fc-4f66-b4b3-5c937beb8fe2",
      deliveryTime: 40,
      description:
        "Culinária baiana, como caldinho de sururu e acarajé, empório nordestino e bar com 400 rótulos de cachaça.",
      name: "Sotero Cozinha Original",
      address: "Rua Dorival Caymmi, 149 - Alto dos Ibirás",
    },
    {
      id: "7",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fbotecodeportal.jpg?alt=media&token=9b85ef89-0a4b-4390-84b1-858c1d3aafa1",
      address: "Avenida das Andorinhas, 333 - Sta. Efigênia",
      category: "Petiscos",
      shipping: 18,
      name: "Boteco de Portal",
      description:
        "O bar tem um cardápio recheado de petiscos que acompanham o chope para o bate-papo num ambiente agradável.Amigos e amigas, temos o prazer de convidar vocês para conhecer nosso espaço!",
      deliveryTime: 20,
    },
    {
      id: "8",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fchun-li.jpg?alt=media&token=363418d5-247a-4690-a048-e2633e1346b5",
      category: "Asiática",
      description:
        "Restaurante chinês com pratos típicos em diversos tamanhos, bebidas, ambiente moderno e opções para levar.",
      shipping: 17,
      name: "Chun-Li",
      address: "Rua Visconde de Mauá, 990 - Centro",
      deliveryTime: 30,
    },
    {
      id: "9",
      address: "Largo dos Jaguarés, 12 - Nova Bragança",
      deliveryTime: 20,
      description:
        "Falar em Mexicaníssimo é falar em comer uma comida tradicional e original mexicana! Diferentemente dos restaurantes tex-mex, aqui você encontra um menu completo tradicionalmente mexicano e com opções para vegetarianos e veganos.",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fmexicanissimo.png?alt=media&token=c30a24af-4fce-47d8-9b9f-af7098e2dabe",
      category: "Mexicana",
      shipping: 3,
      name: "Mexicaníssimo",
    },
  ],
};

const mockGetRestaurantDetails = {
  restaurant: {
    products: [
      {
        id: "3vcYYSOEf8dKeTPd7vHe",
        quantity: 1,
        description: "Pastel autêntico, feito na hora!",
        name: "Pastel",
        category: "Pastel",
        price: 3,
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
      },
      {
        id: "5omTFSOBYiTqeiDwhiBx",
        quantity: 2,
        price: 1,
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
        name: "Bibsfiha queijo",
        category: "Salgado",
        description: "Esfiha deliciosa, receita secreta do Habibs.",
      },
      {
        id: "5qVBu990QDEcBPOzitMy",
        quantity: 1,
        name: "Kibe",
        description: "Kibe árabe de verdade",
        category: "Salgado",
        price: 5.5,
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031407_66194536.jpg",
      },
      {
        id: "6ZNrnQB0CgCZHf31xCRu",
        quantity: 1,
        category: "Lanche",
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031424_66194598.jpg",
        price: 22.9,
        name: "Beirute",
        description: "Da Arábia para o mundo!",
      },
      {
        id: "8CKulpHeAAm1QQqWpReI",
        quantity: 1,
        name: "Batata Frita",
        price: 9.5,
        description: "Batata frita crocante e sequinha.",
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031409_66194560.jpg",
        category: "Acompanhamento",
      },
      {
        id: "KqHR80VJp9my0eBLEHvk",
        quantity: 1,
        name: "Pizza",
        category: "Pizza",
        description: "Pizza crocante de diversos sabores",
        price: 31.9,
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031245_66194219.jpg",
      },
      {
        id: "XHhajKAtvIH2Dq6F83PX",
        quantity: 1,
        name: "Suco",
        category: "Bebida",
        price: 7.9,
        description: "Laranja, Acerola ou Maçã",
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031439_71805445.jpg",
      },
      {
        id: "bEj2JorVLWo86iJf7OF9",
        quantity: 1,
        price: 4,
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/t_medium/pratos/f62f7746-4888-4e81-a9b0-93bf5453c51a/202103180149_woHq_s.jpg",
        category: "Bebida",
        name: "Refrigerante",
        description: "Coca cola, Sprite ou Guaraná",
      },
      {
        id: "fMMfstMTxeos8NWTS4j1",
        quantity: 1,
        category: "Salgado",
        description: "Esfiha deliciosa, receita secreta do Habibs.",
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907151009_76679579.jpg",
        price: 1,
        name: "Bibsfiha frango",
      },
      {
        id: "xhq0QgZXklGSmaBDy6KQ",
        quantity: 1,
        description: "Esfiha deliciosa, receita secreta do Habibs.",
        category: "Salgado",
        name: "Bibsfiha carne",
        price: 1,
        photoUrl:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
      },
    ],
    id: "1",
    category: "Árabe",
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de",
    deliveryTime: 60,
    description:
      "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
    name: "Habibs",
    address: "Rua das Margaridas, 110 - Jardim das Flores",
    shipping: 6,
  },
};

const CartPage = (props) => {
  useProtectedPage();
  const history = useHistory();
  const [confirm, setConfirm] = useState(false);
  const { cart, setCart, removeItemFromCart, selectedRestaurant } =
    useContext(GlobalStateContext);
  const [totalCart, setTotalCart] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("dinheiro");
  // console.log("CART:", cart);
  // console.log("PAGAMENTO:", paymentMethod);

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const calculateTotalCart = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });

    if (selectedRestaurant) total += selectedRestaurant.shipping;

    setTotalCart(formatPrice(total));
  };

  useEffect(() => {
    calculateTotalCart();
  });

  const renderCards = cart.map((product) => {
    return (
      <CartCard
        product={product}
        removeItemFromCart={removeItemFromCart}
        actionCartBtn={false}
        onCartPage={true}
      />
    );
  });

  // console.log("RESTAURANTE: ", selectedRestaurant);
  const confirmButton = () => {
    setConfirm(true);
    setCart({});
    // goToFeedPage(history);
    console.log("FUNCIONOU");
  };
  return (
    <DeviceContainer>
      <Header showBackBtn={false} title={"Meu Carrinho"} />
      <CardAddress showEditBtn={false} />
      {selectedRestaurant ? (
        <>
          <RestaurantDetails>
            <h3>{selectedRestaurant.name}</h3>
            <p>{selectedRestaurant.address}</p>
            <p>{selectedRestaurant.deliveryTime + " min"}</p>
          </RestaurantDetails>
          {renderCards}
          <ShippingContainer>
            <p>Frete: {formatPrice(selectedRestaurant.shipping)}</p>
          </ShippingContainer>
        </>
      ) : (
        <>
          <p>Carrinho vazio</p>
          <ShippingContainer>
            <p>Frete: {formatPrice(0)}</p>
          </ShippingContainer>
        </>
      )}
      <TotalContainer>
        <p>SUBTOTAL</p>
        <TotalValue>{totalCart}</TotalValue>
      </TotalContainer>
      <PaymentMethodContainer>
        <p>Forma de pagamento</p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="forma-de-pagamento"
            name="forma-de-pagamento"
            value={paymentMethod}
            onChange={handlePaymentMethod}
          >
            <FormControlLabel
              value="dinheiro"
              control={<Radio />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="credito"
              control={<Radio />}
              label="Cartão de Crédito"
            />
          </RadioGroup>
        </FormControl>
      </PaymentMethodContainer>
      <ButtonLarge onClick={() => confirmButton()}>Confirmar</ButtonLarge>
      <PedidoEmAndamento trigger={confirm} />
      <Footer />
    </DeviceContainer>
  );
};

export default CartPage;
