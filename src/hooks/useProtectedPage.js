import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLoginPage } from "../routes/coordinator";

const useProtectedPage = (history, token) => {
  useLayoutEffect(() => {
    
    if (!token) {
      goToLoginPage(history);
    }
  }, [token]);
};

export default useProtectedPage;
