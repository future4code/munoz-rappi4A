import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";
import React, { useEffect } from "react";
import { InputsContainer, SignUpPageContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { goToProfilePage } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";

const EditProfilePage = () => {
  useProtectedPage();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const { data: profile, loading } = useRequestData("/profile", token);
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
        alert(err.response.data.message);
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
