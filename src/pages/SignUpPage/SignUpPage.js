import { Button, TextField } from "@material-ui/core"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useForm } from "../../hooks/useForm"
import React from "react"
import { InputsContainer, SignUpPageContainer } from "./styled"

export default function SignUpPage() {
    const { form, onChangeForm, clearInputs } = useForm({
        name: '',
        email: '',
        cpf: '',
        password: ''
    })

    const onSubmitSignUp = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/signup`, form)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                console.log(response)
                clearInputs()
            })
            .catch((err) => {
                alert(err.response.data.message)
                console.log(err.response.data.message)
            })
    }
    return (
        <SignUpPageContainer>
            <InputsContainer >
                <form onSubmit={onSubmitSignUp}>
                    <TextField
                        id="outlined-basic"
                        label="Nome"
                        variant="outlined"
                        margin={'normal'}
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
                        margin={'normal'}
                        name={'email'}
                        type={'email'}
                        value={form.email}
                        onChange={onChangeForm}
                        required
                    />
                    <TextField
                        id="outlined-basic"
                        label="CPF"
                        variant="outlined"
                        margin={'normal'}
                        name={'cpf'}
                        inputProps={{ 'pattern': '[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}' }}
                        helperText={'Ex: 012.345.678-90'}
                        value={form.cpf}
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
                    <Button variant="contained" color="primary" type={'submit'}>Registre-se!</Button>
                </form>
                <Button color="primary">Ja tem conta? Faça Login!</Button>
            </InputsContainer>
        </SignUpPageContainer>
    )
}