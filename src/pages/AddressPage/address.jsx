import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Header } from "../../components/Header/Header";
import {
  AddressPageContainer,
  InputsContainer,
  TittleAddress,
} from "./address.style";
export default function AddAddressPage() {
  return (
    <div>
      <Header showBackBtn={true} />
      <TittleAddress>Meu Endereço</TittleAddress>
      <AddressPageContainer>
        <InputsContainer>
          <form>
            <TextField
              id="outlined-basic"
              label="Logradouro"
              placeholder={"Rua / Av."}
              variant="outlined"
              margin={"normal"}
              name={"name"}
              type={"text"}
              //   value={form.name}
              //   onChange={onChangeForm}
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
              //   value={form.email}
              //   onChange={onChangeForm}
              required
            />
            <TextField
              id="outlined-basic"
              label="Complemento"
              placeholder={"Apto. / Bloco"}
              variant="outlined"
              margin={"normal"}
              name={"complemento"}
              //   inputProps={{ pattern: "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" }}

              //   value={form.cpf}
              //   onChange={onChangeForm}
              required
            />
            <TextField
              id="outlined-basic"
              label="Bairro"
              placeholder={"Bairro"}
              variant="outlined"
              margin={"normal"}
              name={"bairro"}
              type={"text"}
              //   value={form.password}
              //   onChange={onChangeForm}
              required
            />
            <TextField
              id="outlined-basic"
              label="Cidade"
              placeholder={"Cidade"}
              variant="outlined"
              margin={"normal"}
              name={"cidade"}
              type={"text"}
              //   value={form.password}
              //   onChange={onChangeForm}
              required
            />
            <TextField
              id="outlined-basic"
              label="Estado"
              placeholder={"Estado"}
              variant="outlined"
              margin={"normal"}
              name={"estado"}
              type={"text"}
              //   value={form.password}
              //   onChange={onChangeForm}
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
