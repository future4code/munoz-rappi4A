import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartCard } from '../../components/CartCard/CartCard';
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from '../../hooks/useRequestData';
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { RestaurantMenu } from './styled';

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
        <RestaurantMenu>
            <Header title={restaurant && restaurant.name} />
            {
                restaurant ?
                    restaurant.products.map((product) => {
                        return <CartCard product={product} key={product.id} />
                    }) :
                    !loading && <p>Este Restaurante ainda não tem pratos disponíveis :(</p>
            }
            <Footer />
        </RestaurantMenu>
    )
}

export default RestaurantListPage