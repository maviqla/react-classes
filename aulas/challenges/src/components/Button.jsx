import React from "react";

// import { Container } from './styles';

function Button(props) {
  console.log(props);
  return <button className={`btn first ${props.className}`}>{props.innerText}</button>;
}

export default Button;