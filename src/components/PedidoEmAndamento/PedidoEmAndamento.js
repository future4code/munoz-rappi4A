import React from "react";
import {
  ContainerClock,
  ContainerConfirm,
  ContainerRecado,
  TitleAndamento,
} from "./PedidoEmAndamento.style";
import Clock from "../../assets/clock.svg";
import { useRequestData } from "../../hooks/useRequestData";
import { formatPrice } from "../../utils/formatPrice";

export default function PedidoEmAndamento(props) {
  const token = localStorage.getItem("token");
  const { data } = useRequestData("/active-order", token);
  return props.trigger ? (
    <div>
      <ContainerConfirm>
        <ContainerClock>
          <img src={Clock} alt={"clock"} />
        </ContainerClock>
        <ContainerRecado>
          <TitleAndamento>Pedido em andamento</TitleAndamento>
          <p>{data?.order.restaurantName}</p>
          <h3>{`SUBTOTAL ${data && formatPrice(data.order.totalPrice)}`}</h3>
        </ContainerRecado>

        {props.children}
      </ContainerConfirm>
    </div>
  ) : (
    ""
  );
}
