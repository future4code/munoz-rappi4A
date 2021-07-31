import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLoginPage } from "../routes/coordinator";

const useProtectedPage = () => {
  const history = useHistory()
  const token = localStorage.getItem('token')

  useLayoutEffect(() => {
     if (!token) {
      goToLoginPage(history);
    }
  }, [token]);
};

export default useProtectedPage;
