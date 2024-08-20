import React from "react";

import styles from "./Button.module.css";

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
}>;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.btn}>
    {children}
  </button>
);

export default Button;
