import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { goToFeedPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls"
import GlobalStateContext from "../../global/GlobalStateContext"
import Swal from 'sweetalert2'
import { ButtonLarge } from "./style"

export default function PlaceOrderButton(props) {
    const history = useHistory();
    const [order, setOrder] = useState({})
    const { cart, selectedRestaurant } = useContext(GlobalStateContext)
    const token = localStorage.getItem('token')
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
        }).then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Seu pedido foi enviado",
                showConfirmButton: false,
                timer: 2000
              })
              goToFeedPage(history);
        }).catch((err) => {
            if (err.response.data.message === "Payment Method deve ser 'money' ou 'creditcard") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Escolha o tipo de pagamento antes de enviar o pedido!",
               })
            } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: (err.response.data.message ? err.response.data.message : err.response),
              })
            }
        })

    }
    return (
        <>
            <ButtonLarge onClick={placeOrder}>Enviar Pedido!</ButtonLarge>
        </>
    )
}