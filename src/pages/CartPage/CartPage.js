import React, { useEffect, useState, useContext } from "react";
import { Header } from '../../components/Header/Header';
import { Footer } from "../../components/Footer/Footer";
import CardAddress from "../../components/CardAddress/CardAddress";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CartCard } from "../../components/CartCard/CartCard";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import GlobalStateContext from "../../global/GlobalStateContext";
import { formatPrice } from "../../utils/formatPrice";
import PlaceOrderButton from "./PlaceOrderButton";
import { DeviceContainer, EmptyCard, PaymentMethodContainer, RestaurantDetails, ShippingContainer, TotalContainer, TotalValue } from './style'

const CartPage = (props) => {
  useProtectedPage();

  const { cart, removeItemFromCart, selectedRestaurant } =
    useContext(GlobalStateContext);
  const [totalCart, setTotalCart] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

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

  return (
    <DeviceContainer>
      <Header showBackBtn={false} title={'Meu Carrinho'} />
      <CardAddress showEditBtn={false} onCartPage={true}/>
      {selectedRestaurant ?
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
       : 
        <>
          <EmptyCard>Carrinho vazio</EmptyCard>
          <ShippingContainer>
            <p>Frete: {formatPrice(0)}</p>
          </ShippingContainer>
        </>
      }
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
            color={"primary"}
            value={paymentMethod}
            onChange={handlePaymentMethod}
          >
            <FormControlLabel
              value="money"
              control={<Radio color="primary" />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="creditcard"
              control={<Radio color="primary" />}
              label="Cartão de Crédito"
            />
          </RadioGroup>
        </FormControl>
      </PaymentMethodContainer>
      <PlaceOrderButton paymentMethod={paymentMethod} />
      <Footer />
    </DeviceContainer>
  );
};

export default CartPage;
