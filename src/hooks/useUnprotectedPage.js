import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToFeedPage } from "../routes/coordinator";

const useUnprotectedPage = (history, token) => {
  useLayoutEffect(() => {
    if (token) {
      goToFeedPage(history);
    }
  }, [token]);
};

export default useUnprotectedPage;
