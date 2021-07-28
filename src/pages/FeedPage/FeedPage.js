import React from "react";
import { Footer } from "../../components/Footer/Footer";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage();
  return (
    <div>
      <h1>Feed</h1>
      <Footer />
    </div>
  );
};

export default FeedPage;
