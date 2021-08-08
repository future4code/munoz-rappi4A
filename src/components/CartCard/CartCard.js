import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { Card, ImageContainer, InfoBox, ProductDescription, ProductPrice, ProductTitle, QuantityBox, AddButton, RemoveButton } from './style'


export const CartCard = ({ product, cart, removeItemFromCart, onCartPage, handleOpen, actionCartBtn }) => {

  const filteredProduct = cart?.find(cartProduct => cartProduct.id === product.id)

  return (
    <Card key={product.id}>
      <ImageContainer image={product.photoUrl} />
      <InfoBox>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        {actionCartBtn ? (
          <AddButton onClick={() => handleOpen(product)}>adicionar</AddButton>)
          :
          <>
            {onCartPage ?
              <>
                <QuantityBox>{product.quantity}</QuantityBox>
                <RemoveButton onClick={() => removeItemFromCart(product.id)}>remover</RemoveButton>
              </>
              :
              <>
                <QuantityBox>{filteredProduct.quantity}</QuantityBox>
                <RemoveButton onClick={() => handleOpen(product)}>editar</RemoveButton>
              </>
            }
          </>
        }
      </InfoBox>
    </Card>
  )
}