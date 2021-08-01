import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { Card, ImageContainer, InfoBox, ProductDescription, ProductPrice, ProductTitle, QuantityBox, RemoveButton } from './styled'


export const CartCard = ({product, removeItemFromCart}) => {
  return (
    <Card key={product.id}>
      <ImageContainer image={product.photoUrl} />
      <InfoBox>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        <QuantityBox>{product.quantity}</QuantityBox>
        <RemoveButton onClick={() => removeItemFromCart(product.id)}>remover</RemoveButton>
      </InfoBox>
    </Card>
  )
}