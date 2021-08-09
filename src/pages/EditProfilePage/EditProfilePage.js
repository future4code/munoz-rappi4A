import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToProfilePage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";
import { Header } from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import Swal from 'sweetalert2'
import { Button, TextField } from "@material-ui/core";
import { InputsContainer, SignUpPageContainer } from "./style";

const EditProfilePage = () => {
  useProtectedPage();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const { data: profile} = useRequestData("/profile", token);
  const { form, setForm, onChangeForm, clearInputs } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  useEffect(() => {
    if (profile) {
      setForm({
        name: profile.user.name,
        email: profile.user.email,
        cpf: profile.user.cpf,
      });
    }
  }, [profile]);

  const onSubmitEditProfile = (e) => {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/profile`, form, { headers: { auth: token } })
      .then((response) => {
        clearInputs();
        goToProfilePage(history);
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
    <>
      <Header showBackBtn={true} title={"Editar"} />

      <SignUpPageContainer>
        <InputsContainer>
          <form onSubmit={onSubmitEditProfile}>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              margin={"normal"}
              name={"name"}
              type={"text"}
              value={form.name}
              onChange={onChangeForm}
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
            <Button variant="contained" color="primary" type={"submit"}>
              Salvar
            </Button>
          </form>
        </InputsContainer>
      </SignUpPageContainer>
    </>
  );
};

export default EditProfilePage;
