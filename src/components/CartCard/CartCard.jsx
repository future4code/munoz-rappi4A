import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { Card, ImageContainer, InfoBox, ProductDescription, ProductPrice, ProductTitle, QuantityBox, RemoveButton } from './styled'


export const CartCard = ({product}) => {
  return (
    <Card key={product.id}>
      <ImageContainer image={product.photoUrl} />
      <InfoBox>
        <ProductTitle>{props.product.name}</ProductTitle>
        <ProductDescription>{props.product.description}</ProductDescription>
        <ProductPrice>{formatPrice(props.product.price)}</ProductPrice>
        <QuantityBox>{props.product.quantity}</QuantityBox>
        <RemoveButton onClick={() => props.removeItemFromCart(props.product.id)}>remover</RemoveButton>
      </InfoBox>
    </Card>
  )
}