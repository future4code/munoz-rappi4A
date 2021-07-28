import styled from "styled-components";

export const SignUpPageContainer = styled.main`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
    }
  }
`;
