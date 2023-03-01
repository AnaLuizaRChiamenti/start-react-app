import React from "react"
import styled from "styled-components"

interface ButtonStyledPros {
    outline?: boolean;
}


const ButtonStyled = styled.button<ButtonStyledPros>`
    border-radius: 5px;
    background-color: ${(props) => (props.outline ? "white" : "green")};
    padding: 5px;
    color: purple;
    font-size: 15px;
    border: 2px solid purple;
    cursor: pointer;
    margin-top: 15px;
    margin-left: 15px;
`;

export default ButtonStyled;