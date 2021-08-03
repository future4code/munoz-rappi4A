import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartCard } from '../../components/CartCard/CartCard';
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from '../../hooks/useRequestData';
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ContainerTiposComida, RestaurantMenu } from './styled';
import { TiposDeComida } from './styled';

const RestaurantListPage = () => {
    useProtectedPage();
    const token = localStorage.getItem('token')
    const pathParams = useParams()
    const { data, loading } = useRequestData(`/restaurants/${pathParams.id}`, token)
    const [restaurant, setRestaurant] = useState()
    const [products, setProducts] = useState()
    const categories = [
        {
            name: "Pratos Principais",

            products: []
        },
        {
            name: "Acompanhamentos",
            products: []
        },
        {
            name: "Sobremesas",
            products: []
        },
        {
            name: "Bebidas",
            products: []
        }
    ]
    
    useEffect(() => {
        data &&
            setRestaurant(data.restaurant)
    }, [data])

    useEffect(() => {
        restaurant &&
            restaurant.products.forEach((product) => {
                if (product.category === "Acompanhamento" || product.category === "Outros") {
                    categories[1].products.push(product)
                } else if (product.category === "Doce" || product.category === "Sorvete") {
                    categories[2].products.push(product)
                } else if (product.category === "Bebida") {
                    categories[3].products.push(product)
                } else {
                    categories[0].products.push(product)
                }
            })
            setProducts(categories)
    }, [restaurant])
    console.log(products)
    return (
        <RestaurantMenu>
            <Header title={restaurant && restaurant.name} />
            {
                restaurant && products ?
                    products.map((category) => {
                        return (
                            <>
                                {category.products.length>0 && <ContainerTiposComida><TiposDeComida>{category.name}</TiposDeComida></ContainerTiposComida>}
                                {category.products.map((product) => {
                                    return <CartCard product={product} key={product.id} />
                                })}
                            </>
                        )
                    }) :
                    !loading && <p>Este Restaurante ainda não tem pratos disponíveis :(</p>
            }
            <Footer />
        </RestaurantMenu>
    )
}

export default RestaurantListPage