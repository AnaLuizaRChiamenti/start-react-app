import React from "react";
import TitlePage from "../components/TitlePage";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ButtonStyled from "../components/ButtonStyled";

const Home: React.FC = () => {
  return (
    <>
    <Navigation />
      <TitlePage title="Home" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        laborum. Deserunt vitae totam ipsa accusantium cupiditate ipsam maiores
        error unde enim mollitia aliquam nam qui, delectus harum optio earum
        eveniet.
      </p>
      <p>
        <ButtonStyled>Abrir um alerta</ButtonStyled>
        <ButtonStyled outline>Abrir um alerta</ButtonStyled>
      </p>
    </>
  );
};

export default Home;
