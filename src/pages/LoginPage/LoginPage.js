import { Button, TextField } from "@material-ui/core"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useForm } from "../../hooks/useForm"
import React from "react"
import { LoginPageContainer, InputsContainer } from "./styled"

export default function LoginPage() {
    const { form, onChangeForm, clearInputs } = useForm({
        email: '',
        password: ''
    })

    const onSubmitLogin = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/login`, form)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    return (
        <LoginPageContainer>
            <InputsContainer >
                <form onSubmit={onSubmitLogin}>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        margin={'normal'}
                        name={"email"}
                        type={"email"}
                        value={form.email}
                        onChange={onChangeForm}
                        required
                    />

                    <TextField
                        id="outlined-basic"
                        label="Senha"
                        variant="outlined"
                        margin={'normal'}
                        name={'password'}
                        type={'password'}
                        value={form.password}
                        onChange={onChangeForm}
                        required
                    />
                    <Button variant="contained" color="primary" type={'submit'}>Login</Button>
                </form>
                <Button color="primary">Ainda não tem uma conta? Registre-se!</Button>
            </InputsContainer>
        </LoginPageContainer>
    )
}