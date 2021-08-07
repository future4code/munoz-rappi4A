import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import GlobalStateContext from "../../global/GlobalStateContext"
import { ButtonLarge } from "./styled"

export default function PlaceOrderButton(props) {
    const [order, setOrder] = useState({})
    const { cart, selectedRestaurant } = useContext(GlobalStateContext)
    const token = localStorage.getItem('token')
    // const [paymentMethod, setPaymentMethod] = useState()
    const paymentMethod = props.paymentMethod
    let restaurantId = selectedRestaurant && selectedRestaurant.id

    useEffect(() => {
        const products = []
        cart.map((product) => {
            ''
            products.push({ id: product.id, quantity: product.quantity })
        })

        setOrder({ products, paymentMethod })

    }, [cart, selectedRestaurant, props.paymentMethod])
    const placeOrder = () => {
        axios.post(`${BASE_URL}/restaurants/${restaurantId}/order`, order, {
            headers: {
                auth: token
            }
        }).then((res) => {
            console.log("Seu pedido foi enviado", res)
        }).catch((err) => {
            if (err.response.data.message === "Payment Method deve ser 'money' ou 'creditcard") {
                alert("Escolha o tipo de pagamento antes de enviar o pedido!")
            } else {
               alert(err.response.data.message ? err.response.data.message : err.response)
            }
        })

    }
    return (
        <>
            <ButtonLarge onClick={placeOrder}>Confirmar</ButtonLarge>
        </>
    )
}