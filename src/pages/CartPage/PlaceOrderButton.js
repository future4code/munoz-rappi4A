import axios from "axios"
import React, { useContext, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import GlobalStateContext from "../../global/GlobalStateContext"
import { ButtonLarge } from "./styled"

export default function PlaceOrderButton({paymentMethod}) {
    const [order, setOrder] = useState({paymentMethod})
    const {cart, token, selectedRestaurant} = useContext(GlobalStateContext)

    const placeOrder = () => {
        console.log(cart)
        console.log(cart.cart)
        console.log(selectedRestaurant.id)
        const restaurantId = selectedRestaurant.id
        const products = []
        cart.map((product)=> {
            products.push({id: product.id, quantity: product.quantity})
        })
        setOrder({products, paymentMethod, })
        axios.post(`${BASE_URL}/${restaurantId}/order`, order, {
            headers:{
                auth: token
            }
        }) .then((res)=>{
            console.log("Seu pedido foi enviado", res)
        }).catch((err)=>{
            console.log(err.response)
        })
        console.log(restaurantId)
        
    }
    console.log("Carrinho", cart)
    console.log("Pedido",order)
    console.log(selectedRestaurant)
    return (
        <>
        <ButtonLarge onClick={placeOrder}>Confirmar</ButtonLarge>
        </>
    )
}