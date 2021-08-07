import styled from "styled-components"


export const DeviceContainer = styled.div`
  width: 360px;
  margin: 0 auto 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RestaurantDetails = styled.div`
  padding: 16px 18px;
`

export const ShippingContainer = styled.div`
  width: 100%;
  padding: 16px 16px 13px;
  text-align: end;
`

export const TotalContainer = styled.div`
  width: 100%;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
`

export const TotalValue = styled.p`
  color: #e86e5a;
  font-weight: 700;
`

export const PaymentMethodContainer = styled.div`
  width: 100%;
  padding: 25px 16px 0;

  p {
    border-bottom: 1px solid #000;
  }
`

export const ButtonLarge = styled.button`
  width: 100%;
  padding: 12px 0;
  margin: 8px 0;
  background-color: #e86e5a;
  font-size: 16px;
  border: none;
  cursor: pointer;

`

