import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";
import {
  AddressPageContainer,
  InputsContainer,
  TittleAddress,
} from "./address.style";
export default function AddAddressPage() {
  const { form, onChangeForm, clearInputs } = useForm({
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: '',
  })
  const token = localStorage.getItem('token')
  const submitAddress = (e) => {
    e.preventDefault()
    axios.put(`${BASE_URL}/address`, form, {
      headers:{
        auth: token,
      }
    }).then((response)=> {
      localStorage.setItem('token', response.data.token)
    })
    .catch((error)=> {
      alert(error.response.data)
    })
  }
  return (
    <div>
      <Header showBackBtn={true} />
      <TittleAddress>Meu Endereço</TittleAddress>
      <AddressPageContainer>
        <InputsContainer>
          <form onSubmit={submitAddress}>
            <TextField
              id="outlined-basic"
              label="Logradouro"
              placeholder={"Rua / Av."}
              variant="outlined"
              margin={"normal"}
              name={"street"}
              type={"text"}
              value={form.street}
              onChange={onChangeForm}
              required
            />

            <TextField
              id="outlined-basic"
              label="Número"
              variant="outlined"
              margin={"normal"}
              name={"number"}
              type={"number"}
              placeholder={"Número"}
              value={form.number}
              onChange={onChangeForm}
              required
            />
            <TextField
              id="outlined-basic"
              label="Complemento"
              placeholder={"Apto. / Bloco"}
              variant="outlined"
              margin={"normal"}
              name={"complement"}
              value={form.complement}
              onChange={onChangeForm}
            />
            <TextField
              id="outlined-basic"
              label="Bairro"
              placeholder={"Bairro"}
              variant="outlined"
              margin={"normal"}
              name={"neighbourhood"}
              type={"text"}
              value={form.neighbourhood}
              onChange={onChangeForm}
              required
            />
            <TextField
              id="outlined-basic"
              label="Cidade"
              placeholder={"Cidade"}
              variant="outlined"
              margin={"normal"}
              name={"city"}
              type={"text"}
              value={form.city}
              onChange={onChangeForm}
              required
            />
            <TextField
              id="outlined-basic"
              label="Estado"
              placeholder={"Estado"}
              variant="outlined"
              margin={"normal"}
              name={"state"}
              type={"text"}
              value={form.state}
              onChange={onChangeForm}
              required
            />
            <Button variant="contained" color="primary" type={"submit"}>
              Salvar
            </Button>
          </form>
        </InputsContainer>
      </AddressPageContainer>
    </div>
  );
}
