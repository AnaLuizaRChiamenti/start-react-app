import React from "react";
import Navigation from "../components/Navigation";
import TitlePage from "../components/TitlePage";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  return (
    <>
      <Navigation />
      <TitlePage title="Produtos"/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga
        sapiente laudantium atque iure aperiam tenetur saepe nobis, quo
        aspernatur praesentium illo. Iusto minus atque praesentium nam
        obcaecati? Reprehenderit, dolorem.
      </p>
    </>
  );
};

export default Products;
