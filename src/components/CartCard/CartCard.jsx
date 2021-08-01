import React from 'react'
import { Card, ImageContainer, InfoBox, QuantityBox, RemoveButton } from './styled'

export const CartCard = ({product}) => {
  return (
    <Card key={product.id}>
      <ImageContainer image={product.photoUrl} />
      <InfoBox>
        <QuantityBox>2</QuantityBox>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>R$ {product.price.toFixed(2)}</p>
        <RemoveButton>remover</RemoveButton>
      </InfoBox>
    </Card>
  )
}