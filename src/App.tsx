import React from "react";
import NavStyled from "./components/NavStyled";
import Wrapper from "./components/WrapperStyled";
import GlobalStyled from "./config/GlobalStyled";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <>
    <NavStyled/>
      <GlobalStyled />
      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </>
  );
};

export default App;
