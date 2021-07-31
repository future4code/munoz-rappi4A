import React from "react";
import { Footer } from "../../components/Footer/Footer";
import useProtectedPage from "../../hooks/useProtectedPage";

const ProfilePage = () => {
  useProtectedPage();
  return (
    <div>
      <h1>ProfilePage</h1>
      <Footer />
    </div>
  );
};

export default ProfilePage;
