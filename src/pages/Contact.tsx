import React from "react";
import { Navigate } from "react-router-dom";
import TitlePage from "../components/TitlePage";
import Navigation from "../components/Navigation";

const Contact: React.FC = () => {
  return (
    <>
      <Navigation />
      <TitlePage title="Contato" />
    </>
  );
};

export default Contact;
