import React from 'react'
import { Card, ImageContainer, InfoBox, QuantityBox, RemoveButton } from './styled'

export const CartCard = (props) => {
  return (
    <Card key={props.product.id}>
      <ImageContainer image={props.product.photoUrl} />
      <InfoBox>
        <QuantityBox>2</QuantityBox>
        <RemoveButton>remover</RemoveButton>
      </InfoBox>
    </Card>
  )
}