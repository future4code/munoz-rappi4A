import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToAddressPage, goToLoginPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LogoHeader from "../../components/LogoHeader/LogoHeader"
import Swal from 'sweetalert2'
import { Button, TextField } from "@material-ui/core";
import { InputsContainer, SignUpPageContainer } from "./style";

export default function SignUpPage() {
  const history = useHistory();
  useUnprotectedPage();
  const { form, onChangeForm, clearInputs } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onSubmitSignUp = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/signup`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        clearInputs();
        goToAddressPage(history);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: (err.response.data.message),
        })
      });
  };
  return (
    <SignUpPageContainer>
      <LogoHeader />
      <InputsContainer>
        <form onSubmit={onSubmitSignUp}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            margin={"normal"}
            name={"name"}
            type={"text"}
            value={form.name}
            onChange={onChangeForm}
            autoFocus
            required
          />

          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            margin={"normal"}
            name={"email"}
            type={"email"}
            value={form.email}
            onChange={onChangeForm}
            required
          />
          <TextField
            id="outlined-basic"
            label="CPF"
            variant="outlined"
            margin={"normal"}
            name={"cpf"}
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            helperText={"Ex: 012.345.678-90"}
            value={form.cpf}
            onChange={onChangeForm}
            required
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            margin={"normal"}
            name={"password"}
            type={"password"}
            value={form.password}
            onChange={onChangeForm}
            required
          />
          <Button variant="contained" color="primary" type={"submit"}>
            Salvar
          </Button>
        </form>
        <Button onClick={() => goToLoginPage(history)} color="primary">
          Ja tem conta? Fa??a Login!
        </Button>
      </InputsContainer>
    </SignUpPageContainer>
  );
}
