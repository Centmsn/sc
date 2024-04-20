import React from "react";
import * as P from "./Button.parts";

interface ButtonProps {
    children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return <P.BlueButton>Jakiś tekst: {children}</P.BlueButton>;
};

export default Button;
