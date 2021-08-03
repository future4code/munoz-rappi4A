import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartCard } from '../../components/CartCard/CartCard';
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from '../../hooks/useRequestData';
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { RestaurantMenu } from './styled';
import { TiposDeComida } from '../FeedPage/feedPage.style';

const RestaurantListPage = () => {
    useProtectedPage();
    const token = localStorage.getItem('token')
    const pathParams = useParams()
    const { data, loading } = useRequestData(`/restaurants/${pathParams.id}`, token)
    const [restaurant, setRestaurant] = useState()
    const [products, setProducts] = useState()
    const [ready, setReady] = useState(false)
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
                if (product.category === "Acompanhamento") {
                    categories[1].products.push(product)
                } else if (product.category === "Bebida") {
                    categories[2].products.push(product)
                } else {
                    categories[0].products.push(product)
                }
            })
            setReady(true)
    }, [restaurant])
    useEffect(()=>{
        console.log("entrou", categories)
        setProducts(categories)
    }, [ready])
    console.log("products",products)
    return (
        <RestaurantMenu>
            <Header title={restaurant && restaurant.name} />
            {/* {
                restaurant ?
                    restaurant.products.map((product) => {
                        return <CartCard product={product} key={product.id} />
                    }) :
                    !loading && <p>Este Restaurante ainda não tem pratos disponíveis :(</p>
            } */}
            {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            {/*  !!! Aqui tem a treta: ele renderiza as categorias mas não renderiza o filter dos produtos */}
            {
                restaurant && products ?
                    products.map((category) => {
                        return (
                            <>
                                {category.products.length>0 && <TiposDeComida>{category.name}</TiposDeComida>}
                                {category.products.map((product) => {
                                    console.log("mapa de produtos")
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