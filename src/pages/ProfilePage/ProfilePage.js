import React from "react";
import { Footer } from "../../components/Footer/Footer";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Header } from "../../components/Header/Header";


const ProfilePage = () => {
  useProtectedPage();
  return (
    <div>
      <Header showBackBtn={false} title={"Rappi4"} />
      <h1>ProfilePage</h1>
      <Footer />
    </div>
  );
};

export default ProfilePage;
