import { css } from "@emotion/css";
import React from "react";

const styles = css`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  line-height: 1.75;
  text-transform: uppercase;

  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 51, 102);
  border-radius: 0px;
  font-weight: 700;
  font-family: "Roboto Condensed", sans-serif;
  padding: 16px 40px;
  font-size: 1rem;
  box-shadow: none;
  min-width: 200px;
`;

interface ButtonsProps {
  children: JSX.Element | string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonsProps) => {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
