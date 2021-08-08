import React from "react";
import {
  ClockIcon,
  ContainerClock,
  ContainerConfirm,
  ContainerRecado,
  TitleAndamento,
} from "./PedidoEmAndamento.style";
import Clock from "../../assets/clock.svg";
import { useRequestData } from "../../hooks/useRequestData";

export default function PedidoEmAndamento(props) {
  const token = localStorage.getItem("token");
  const { data } = useRequestData("/active-order", token);
  console.log(data);
  return props.trigger ? (
    <div>
      <ContainerConfirm>
        <ContainerClock>
          <ClockIcon src={Clock} alt={"clock"} />
        </ContainerClock>
        <ContainerRecado>
          <TitleAndamento>Pedido em andamento</TitleAndamento>
          <p>{data?.order.restaurantName}</p>
          <h3>{`SUBTOTAL R$${data?.order.totalPrice}`}</h3>
        </ContainerRecado>

        {props.children}
      </ContainerConfirm>
    </div>
  ) : (
    ""
  );
}
