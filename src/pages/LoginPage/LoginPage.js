import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToFeedPage, goToSignUpPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";
import GlobalStateContext from "../../global/GlobalStateContext";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LogoHeader from "../../components/LogoHeader/LogoHeader"
import Swal from 'sweetalert2'
import { Button, TextField } from "@material-ui/core";
import { LoginPageContainer, InputsContainer } from "./style";


export default function LoginPage() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  useUnprotectedPage();
  const { setLogout } = useContext(GlobalStateContext);
  const { form, onChangeForm, clearInputs } = useForm({
    email: "",
    password: "",
  });

  const onSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        clearInputs();
        goToFeedPage(history);
        setLogout("Sair");
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
    <LoginPageContainer>
      <LogoHeader />
      <InputsContainer>
        <form onSubmit={onSubmitLogin}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin={"normal"}
            name={"email"}
            type={"email"}
            value={form.email}
            onChange={onChangeForm}
            autoFocus
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
            Login
          </Button>
        </form>
        <Button onClick={() => goToSignUpPage(history)} color="primary">
          Ainda não tem uma conta? Registre-se!
        </Button>
      </InputsContainer>
    </LoginPageContainer>
  );
}
