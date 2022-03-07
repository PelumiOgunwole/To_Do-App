import React from 'react';
import './App.css'

const Button = ({show,colour,double}) => {
  //console.log("I am"+show())
  return <div > 
      <button className={double ? "button" : "changeButtonColor"} onClick = {show}  >{double ? "Add": "Close"}</button>
  </div>;
};

export default Button;
