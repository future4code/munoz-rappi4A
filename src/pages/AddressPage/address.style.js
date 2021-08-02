import styled from "styled-components";

export const AddressPageContainer = styled.main`
  max-width: 100vw;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TittleAddress = styled.h4`
  justify-content: center;
  display: flex;
  margin: 5vw;
`;

export const InputsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95vw;
  form {
    display: flex;
    flex-direction: column;
    input,
    button {
      width: 100%;
    }
    button {
      margin-top: 16px;
      height: 6vh;
      border: none;
    }
  }
`;
