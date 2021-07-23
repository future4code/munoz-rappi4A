import React from 'react'
import useProtectedPage from "../../hooks/useProtectedPage";


const CartPage = () => {
    useProtectedPage();
    return (
        <div>
            <h1>CartPage</h1>
        </div>
    )
}

export default CartPage
