import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { Card, ImageContainer, InfoBox, ProductDescription, ProductPrice, ProductTitle, QuantityBox, AddButton, RemoveButton } from './styled'


export const CartCard = ({product, removeItemFromCart, handleOpen, actionCartBtn}) => {
  return (
    <Card key={product.id}>
      <ImageContainer image={product.photoUrl} />
      <InfoBox>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        {actionCartBtn ? (
          <AddButton onClick={() => handleOpen(product)}>adicionar</AddButton>) :
          (<>
           <QuantityBox>{product.quantity}</QuantityBox>
           <RemoveButton onClick={() => removeItemFromCart(product.id)}>remover</RemoveButton>
           </>
          )}
      </InfoBox>
    </Card>
  )
}