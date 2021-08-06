import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartCard } from '../../components/CartCard/CartCard';
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from '../../hooks/useRequestData';
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ContainerTiposComida, RestaurantMenu } from './styled';
import { TiposDeComida } from './styled';
import RestaurantMenuCard from '../../components/RestaurantMenuCard/RestaurantMenuCard';

const RestaurantMenuPage = () => {
  useProtectedPage();
  const token = localStorage.getItem('token')
  const pathParams = useParams()
  const { data, loading } = useRequestData(`/restaurants/${pathParams.id}`, token)
  const [restaurant, setRestaurant] = useState()
  const [products, setProducts] = useState()

  useEffect(() => {
    if (data) {

      const cat = []

      data.restaurant.products.forEach((product) => {

        const exists = cat.filter((category) => {
          if (category.name === product.category) {
            return true
          }
          return false
        })

        if (exists.length > 0) {
          cat.forEach((category) => {
            if (category.name === product.category) {
              category.products.push(product)
            }
          })
        } else {
          cat.push({ name: product.category, products: [product] })
        }

        setRestaurant(data.restaurant)
        setProducts(cat)
      })
    }
  }, [data])

  return (
    <RestaurantMenu>
      <Header title={restaurant && restaurant.name} />
      {restaurant && <RestaurantMenuCard restaurant={restaurant} />}
      {
        restaurant && products ?
          products.map((category) => {
            return (
              <div key={category.name}>
                {category.products.length > 0 && <ContainerTiposComida><TiposDeComida>{category.name}</TiposDeComida></ContainerTiposComida>}
                {category.products.map((product) => {
                  return <CartCard product={product} key={product.id} />
                })}
              </div>
            )
          }) :
          !loading && <p>Este Restaurante ainda não tem pratos disponíveis :(</p>
      }
      <Footer />
    </RestaurantMenu>
  )
}

export default RestaurantMenuPage