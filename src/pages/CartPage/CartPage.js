import React from "react";
import { Footer } from "../../components/Footer/Footer";
import useProtectedPage from "../../hooks/useProtectedPage";

const CartPage = () => {
  useProtectedPage();
  return (
    <div>
      <h1>CartPage</h1>
      <Footer />
    </div>
  );
};

export default CartPage;
