import React from "react";

interface TitlePageProps {
  title: string;
  color?: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ title, color }) => {
  //SEM IF TERNARY
  //   let defaultColor = "#56e832";
  //   if (color) {
  //     defaultColor = color;
  // }
  // return <h2 style={{ color: defaultColor }}>{title}</h2>;
  return <h2 style={{ color: color ? color : "#0dff00" , marginTop: '20px'}}>{title}</h2>;
};

export default TitlePage;
