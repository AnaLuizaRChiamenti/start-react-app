import React from "react";
import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *, 
    html, 
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 20px;
        color: white;
    }

    header > a {
        padding: 15px;
        text-decoration: none;
        align-items: baseline;
    }

    p {
        color: black;
        margin-left: 50px
    }

    h2 {
        margin-left: 50px;
    }

`

export default GlobalStyled;