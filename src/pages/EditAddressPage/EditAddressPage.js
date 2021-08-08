import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToProfilePage } from "../../routes/coordinator";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import Swal from 'sweetalert2'
import { Button, TextField } from "@material-ui/core";
import { AddressPageContainer, InputsContainer } from "./style";


const EditAddressPage = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const history = useHistory();
  const { data: profile } = useRequestData("/profile/address", token);
  const { form, setForm, onChangeForm, clearInputs } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  useEffect(() => {
    if (profile) {
      setForm({
        street: profile.address.street,
        number: profile.address.number,
        neighbourhood: profile.address.neighbourhood,
        city: profile.address.city,
        state: profile.address.state,
        complement: profile.address.complement,
      });
    }
  }, [profile]);

  const submitEditAddress = (e) => {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/address`, form, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        clearInputs();
        goToProfilePage(history);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: (error.response.data),
        })
      });
  };
  return (
    <div>
      <Header showBackBtn={true} title={"Endereço"} />
      <AddressPageContainer>
        <InputsContainer>
          <form onSubmit={submitEditAddress}>
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
};
export default EditAddressPage;
