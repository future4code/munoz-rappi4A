import React from "react";
import "./styled.css";
import { useHistory } from "react-router-dom"
import { goToFeedPage } from "../../routes/coordinator"

const ErrorPage = () => {
  const history = useHistory()

  return (
    <>
      <h1>404 Error Page</h1>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <button onClick={() => goToFeedPage(history)} className="more-link">Voltar ao feed</button>
      </div>
    </>
  );
};

export default ErrorPage;
