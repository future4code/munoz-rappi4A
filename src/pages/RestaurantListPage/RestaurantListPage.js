import React from 'react'
import useProtectedPage from "../../hooks/useProtectedPage";

const RestaurantListPage = () => {
    useProtectedPage();
    return (
        <div>
            <h1>RestaurantListPage</h1>
        </div>
    )
}

export default RestaurantListPage