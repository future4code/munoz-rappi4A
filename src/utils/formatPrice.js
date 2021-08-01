export const formatPrice = (price) => {
  return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}