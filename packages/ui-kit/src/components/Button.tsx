import React from "react";

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
}>;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
