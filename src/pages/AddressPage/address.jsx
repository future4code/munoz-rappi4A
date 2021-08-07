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
import { useHistory } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"
import useProtectedPage from "../../hooks/useProtectedPage";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function AddAddressPage() {
  const history = useHistory()
  const token = localStorage.getItem('token')
  useProtectedPage();
  const { form, onChangeForm, clearInputs } = useForm({
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: '',
  })

  const submitAddress = (e) => {
    e.preventDefault()
    axios.put(`${BASE_URL}/address`, form, {
      headers:{
        auth: token,
      }
    }).then((response)=> {
      localStorage.setItem('token', response.data.token)
      clearInputs();
      goToLoginPage(history)
    })
    .catch((error)=> {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: (error.response.data),
      })
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
              autoFocus
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
