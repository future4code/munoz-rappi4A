import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToFeedPage } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const history = useHistory()
  const token = localStorage.getItem('token')

  useLayoutEffect(() => {
    if (token) {
      goToFeedPage(history);
    }
  }, [token]);
};

export default useUnprotectedPage;
