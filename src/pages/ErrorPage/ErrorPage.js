import React from "react";
import "./styled.css";
import { useHistory } from "react-router-dom";
import { goToFeedPage } from "../../routes/coordinator";

const ErrorPage = () => {
  const history = useHistory();

  return (
    <>
      <h1>Esta página não existe</h1>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <button className="more-link" onClick={() => goToFeedPage(history)}>
          Voltar ao feed
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
