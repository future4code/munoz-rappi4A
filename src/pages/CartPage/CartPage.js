import React, { useEffect, useState } from "react";
import { Header } from '../../components/Header/Header';
import { Footer } from "../../components/Footer/Footer";
import CardAddress from '../../components/CardAddress/CardAddress';

import useProtectedPage from "../../hooks/useProtectedPage";
import { CartCard } from '../../components/CartCard/CartCard';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";


import { ButtonLarge, DeliverAddress, DeviceContainer, ImageContainer, InfoBox, PaymentMethodContainer, QuantityBox, RemoveButton, RestaurantDetails, ShippingContainer, TotalContainer, TotalValue } from './styled'
import { formatPrice } from "../../utils/formatPrice";
import PlaceOrderButton from "./PlaceOrderButton";

const CartPage = () => {
  useProtectedPage();

  const { cart, removeItemFromCart, selectedRestaurant } = useContext(GlobalStateContext);
  const [totalCart, setTotalCart] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState("")
  // console.log("CART:", cart);
  console.log("PAGAMENTO:", paymentMethod);

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const calculateTotalCart = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.price * item.quantity
    })

    if (selectedRestaurant) total += selectedRestaurant.shipping;

    setTotalCart(formatPrice(total));
  }

  useEffect(() => {
    calculateTotalCart()
  })

  const renderCards = cart.map((product) => {
    return (
      <CartCard product={product} removeItemFromCart={removeItemFromCart} actionCartBtn={false} onCartPage={true}/>
    )
  })

  // console.log('RESTAURANTE: ', selectedRestaurant);

  return (
    <DeviceContainer>
      <Header showBackBtn={false} title={'Meu Carrinho'} />
      <CardAddress showEditBtn={false} />
      {selectedRestaurant ?
        <>
          <RestaurantDetails>
            <h3>{selectedRestaurant.name}</h3>
            <p>{selectedRestaurant.address}</p>
            <p>{selectedRestaurant.deliveryTime + ' min'}</p>
          </RestaurantDetails>
          {renderCards}
          <ShippingContainer>
            <p>Frete: {formatPrice(selectedRestaurant.shipping)}</p>
          </ShippingContainer>
        </>
        :
        <>
          <p>Carrinho vazio</p>
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
          <RadioGroup aria-label="forma-de-pagamento" name="forma-de-pagamento" color={'primary'} value={paymentMethod} onChange={handlePaymentMethod}>
            <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
            <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
          </RadioGroup>
        </FormControl>
      </PaymentMethodContainer>
      <PlaceOrderButton paymentMethod={paymentMethod}/>
      <Footer />
    </DeviceContainer>
  )
}


export default CartPage;
