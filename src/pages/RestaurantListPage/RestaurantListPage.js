import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from '../../hooks/useRequestData';

const RestaurantListPage = () => {
    useProtectedPage();
    const token = localStorage.getItem('token')
    const pathParams = useParams()
    const { data, loading } = useRequestData(`/restaurants/1`, token)
    const [restaurant, setRestaurant] = useState()
    console.log(data && data.restaurant.products)

    useEffect(() => {
        data &&
            setRestaurant(data.restaurant)
    }, [data])
    console.log(restaurant)

    return (
        <div>
            <h1>RestaurantListPage</h1>
            {/* {restaurant ?
                showMenu() :
                !loading && <p>Este Restaurante ainda não tem pratos disponíveis :(</p>} */}
            {
                restaurant &&
                restaurant.products.map((product) => {
                    console.log(product.name)
                    return (
                        <div key={product.id}>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <img src={product.photoUrl} alt={product.name} />
                            <p>R$ {product.price},00</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RestaurantListPage