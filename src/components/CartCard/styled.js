import styled from "styled-components"


export const Card = styled.div`
  width: 328px;
  height: 112px;
  margin: 4px 0;
  /* padding: 0 0 0 113px; */
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  overflow: hidden;
  display: flex;
`

export const ImageContainer = styled.div`
  width: 97px;
  height: 112.6px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
`

export const InfoBox = styled.div`
  position: relative;
  width: calc(100% - 97px);
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center ;

`

export const ProductTitle = styled.p`
  color: #e86e5a;
  letter-spacing: -0.39px;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #b8b8b8;
  letter-spacing: -0.34px;
`

export const ProductPrice = styled.p`
  color: #000;
  letter-spacing: -0.39px;
`

export const QuantityBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 33px;
  height: 33px;
  color: #e86e5a;
  border-radius: 0 8px;
  border: solid 1px #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 90px;
  height: 31px;
  color: #e02020;
  background-color: transparent;
  border-radius: 8px 0;
  border: solid 1px #e02020; 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`