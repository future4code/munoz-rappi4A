import React from "react";
import { ContainerConfirm, TitleAndamento } from "./PedidoEmAndamento.style";
import Clock from "../../assets/clock.svg";
import { useRequestData } from "../../hooks/useRequestData";

export default function PedidoEmAndamento(props) {
  const token = localStorage.getItem("token");
  const { data } = useRequestData("/active-order", token);
  console.log(data);
  return props.trigger ? (
    <div>
      <ContainerConfirm>
        <div>
          <img src={Clock} alt={"clock"} />
        </div>
        <div>
          <TitleAndamento>Pedido em andamento</TitleAndamento>
          {/* <p>{data?.order.restaurantName}</p> */} <p>AAAAAAAA</p>
          {/* <h3>{`SUBTOTAL R$${data?.order.totalPrice}`}</h3> */}{" "}
          <h3>67674</h3>
        </div>

        {props.children}
      </ContainerConfirm>
    </div>
  ) : (
    ""
  );
}
